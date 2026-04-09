// import { useState, useEffect } from 'react';

// interface doc {
//   id: string;
//   name: string;
// }

// function DocumentList() {
//   const [docs, setDocs] = useState<doc[]>([]);      // State for data
//   const [loading, setLoading] = useState(true); // State for loading spinner
//   const [error, setError] = useState(null);  // State for error handling

//   useEffect(() => {
//     fetch('https://yourservice.com')
//       .then(response => {
//         if (!response.ok) throw new Error('Failed to fetch');
//         return response.json(); // Convert raw response to JSON
//       })
//       .then(data => {
//         setDocs(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {docs.map(doc => <li key={doc.id}>{doc.name}</li>)}
//     </ul>
//   );
// }