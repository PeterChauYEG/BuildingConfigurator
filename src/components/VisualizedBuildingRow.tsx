import VisualizedBuildingElement from './VisualizedBuildingElement';

type Props = {
  row: string[];
};

const VisualizedBuildingRow = ({ row }: Props) => {
  return (
    <div className={'flex flex-row mb-2 h-10 items-center'}>
      {row.map((element: string, j: number) => (
        <VisualizedBuildingElement element={element} key={j} />
      ))}
    </div>
  );
};

export default VisualizedBuildingRow;
