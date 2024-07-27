import AddDocumentBtn from '@/components/AddDocumentBtn';
import { DeleteModal } from '@/components/DeleteModal';
import Header from '@/components/Header';
import Notifications from '@/components/Notifications';
import { Button } from '@/components/ui/button';
import { getDocuments } from '@/lib/actions/room.actions';
import { dateConverter } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Home = async () => {
  // Example static email, replace with actual logic to fetch user data
  const userEmail = 'user@example.com'; // Replace this with actual email fetching logic

  const roomDocuments = await getDocuments(userEmail);

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          <Notifications />
          {/* Remove Clerk-specific components */}
        </div>
      </Header>

      {(roomDocuments?.data?.length ?? 0) > 0 ? (
        <div className="document-list-container">
          <div className="document-list-title">
            <h3 className="text-28-semibold">All documents</h3>
            <AddDocumentBtn 
              userId="user-id" // Replace with actual user ID if needed
              email={userEmail}
            />
          </div>
          <ul className="document-ul">
            {roomDocuments.data.map(({ id, metadata, createdAt }) => (
              <li key={id} className="document-list-item">
                <Link href={`/documents/${id}`} className="flex flex-1 items-center gap-4">
                  <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                    <Image 
                      src="/assets/icons/doc.svg"
                      alt="file"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="line-clamp-1 text-lg">{metadata.title}</p>
                    <p className="text-sm font-light text-blue-100">Created about {dateConverter(createdAt)}</p>
                  </div>
                </Link>
                <DeleteModal roomId={id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="document-list-empty">
          <Image 
            src="/assets/icons/doc.svg"
            alt="Document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn 
            userId="user-id" // Replace with actual user ID if needed
            email={userEmail}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
