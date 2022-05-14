export default function TableBody({
  EventName,
  EventDate,
  EventTime,
  EventLocation,
  EventButton,
}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {EventName}
      </th>
      <td className="px-6 py-4">{EventDate}</td>
      <td className="px-6 py-4">{EventTime}</td>
      <td className="px-6 py-4">{EventLocation}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="www.test.com"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {EventButton}
        </a>
      </td>
    </tr>
  );
}
