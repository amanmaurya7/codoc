import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getUsers } from "@/lib/actions/user.actions"; // Assuming a function to fetch users
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }) => {
  const room = await getDocument({ roomId: id });

  if (!room) redirect('/');

  const userIds = Object.keys(room.usersAccesses);
  const users = await getUsers({ userIds }); // This should fetch users based on userIds

  const usersData = users.map((user) => ({
    ...user,
    userType: room.usersAccesses[user.email]?.includes('room:write') ? 'editor' : 'viewer'
  }));

  const currentUserType = 'editor'; // Defaulting to 'editor' for now

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom 
        roomId={id}
        roomMetadata={room.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  );
};

export default Document;
