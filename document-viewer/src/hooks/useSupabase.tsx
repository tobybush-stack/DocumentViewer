import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface FileObject {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: Record<string, any>;
  url: string;
}

interface DocumentListProps {
  onSelect: (url: string) => void;
}

function DocumentGallery({onSelect} : DocumentListProps) {
  const [docs, setDocs] = useState<FileObject[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const { data, error } = await supabase.storage.from('Public Document Viewer Documents').list() as { data: FileObject[], error: any };

      if (error) {
        console.error('Error fetching docs:', error);
      } else {
        setDocs(data);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div>
      {docs.map((doc) => (
          <li key={doc.url}>
            <button onClick={() => onSelect(doc.url)}>
              {doc.name}
            </button>
          </li>
      ))}
    </div>
  );
}

export default DocumentGallery

