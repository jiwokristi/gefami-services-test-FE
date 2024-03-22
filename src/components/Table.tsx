import { Fragment } from 'react';

export type Column<T> = {
  header: string;
  key?: string | number;
  renderCell?: (rowData: T) => React.ReactNode;
  width?: string;
};

type Props<T, P> = {
  data: T[];
  columns: Column<T>[] | ((props: P) => Column<T>[]);
  classes?: string;
  columnProps?: P;
  action?: (row: T) => void;
};

export function Table<T, P>({
  data,
  columns,
  classes = '',
  columnProps,
  action,
}: Props<T, P>) {
  const columnArray =
    typeof columns === 'function' ? columns(columnProps as P) : columns;

  if (data.length === 0) {
    return <p className="text-[1.8rem] opacity-40">No data.</p>;
  }

  return (
    <table className={`w-full ${classes}`}>
      <thead>
        <tr>
          {columnArray.map((column, colIndex) => (
            <th
              className={`p-16 text-left align-top text-[1.8rem] tracking-0.25 ${column.width}`}
              key={column.key || colIndex.toString()}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            <tr className="odd:bg-initial-state-medium">
              {columnArray.map((column, colIndex) => (
                <td
                  className={`p-16 text-[1.8rem] tracking-0.25 ${column.width}`}
                  key={column.key || colIndex.toString()}
                >
                  {column.renderCell
                    ? column.renderCell(row)
                    : (row[column.key as keyof T] as React.ReactNode) || '-'}
                </td>
              ))}
              {action && (
                <td className="p-16 text-[1.8rem] tracking-0.25">
                  <button onClick={() => action(row)}>
                    <span className="text-red-500">Delete</span>
                  </button>
                </td>
              )}
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
