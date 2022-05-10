import TableBody from "./tableBody";

export default function Table({ Header1, Header2, Header3, Header4, Header5, TableBody }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {Header1}
            </th>
            <th scope="col" className="px-6 py-3">
              {Header2}
            </th>
            <th scope="col" className="px-6 py-3">
              {Header3}
            </th>
            <th scope="col" className="px-6 py-3">
              {Header4}
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">{Header5}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {TableBody}
        </tbody>
      </table>
    </div>
  );
}
