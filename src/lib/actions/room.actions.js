'use server';

const { nanoid } = require('nanoid');
const liveblocks = require('../liveblocks');
const { revalidatePath } = require('next/cache');
const { getAccessType, parseStringify } = require('../utils');
const { redirect } = require('next/navigation');

const createDocument = async ({ userId, email }) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: 'Untitled'
    };

    const usersAccesses = {
      [email]: ['room:write']
    };

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: []
    });
    
    revalidatePath('/');

    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while creating a room: ${error}`);
  }
};

const getDocument = async ({ roomId, userId }) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    
    const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    
    if (!hasAccess) {
      throw new Error('You do not have access to this document');
    }
    
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while getting a room: ${error}`);
  }
};

const updateDocument = async (roomId, title) => {
  try {
    const updatedRoom = await liveblocks.updateRoom(roomId, {
      metadata: {
        title
      }
    });

    revalidatePath(`/documents/${roomId}`);

    return parseStringify(updatedRoom);
  } catch (error) {
    console.log(`Error happened while updating a room: ${error}`);
  }
};

const getDocuments = async (email) => {
  try {
    const rooms = await liveblocks.getRooms({ userId: email });
    
    return parseStringify(rooms);
  } catch (error) {
    console.log(`Error happened while getting rooms: ${error}`);
  }
};

const updateDocumentAccess = async ({ roomId, email, userType, updatedBy }) => {
  try {
    const usersAccesses = {
      [email]: getAccessType(userType),
    };

    const room = await liveblocks.updateRoom(roomId, { 
      usersAccesses
    });

    if (room) {
      const notificationId = nanoid();

      await liveblocks.triggerInboxNotification({
        userId: email,
        kind: '$documentAccess',
        subjectId: notificationId,
        activityData: {
          userType,
          title: `You have been granted ${userType} access to the document by ${updatedBy.name}`,
          updatedBy: updatedBy.name,
          avatar: updatedBy.avatar,
          email: updatedBy.email
        },
        roomId
      });
    }

    revalidatePath(`/documents/${roomId}`);
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while updating a room access: ${error}`);
  }
};

const removeCollaborator = async ({ roomId, email }) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    if (room.metadata.email === email) {
      throw new Error('You cannot remove yourself from the document');
    }

    const updatedRoom = await liveblocks.updateRoom(roomId, {
      usersAccesses: {
        [email]: null
      }
    });

    revalidatePath(`/documents/${roomId}`);
    return parseStringify(updatedRoom);
  } catch (error) {
    console.log(`Error happened while removing a collaborator: ${error}`);
  }
};

const deleteDocument = async (roomId) => {
  try {
    await liveblocks.deleteRoom(roomId);
    revalidatePath('/');
    redirect('/');
  } catch (error) {
    console.log(`Error happened while deleting a room: ${error}`);
  }
};

module.exports = { createDocument, getDocument, updateDocument, getDocuments, updateDocumentAccess, removeCollaborator, deleteDocument };
