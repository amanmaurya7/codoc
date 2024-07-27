'use client';

import Loader from '@/components/loader';
import { getDocumentUsers } from '@/lib/actions/user.actions';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';

const Provider = ({ children }) => {
  return (
    <LiveblocksProvider 
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async () => {
        // Replace with your implementation or return an empty array if not used
        return []; 
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: '', // Provide a placeholder or modify as needed
          text,
        });

        return roomUsers;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
