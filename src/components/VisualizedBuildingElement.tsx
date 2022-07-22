type Props = {
  element: string;
};

const VisualizedBuildingElement = ({ element }: Props) => {
  return (
    <p className={'mr-2 w-10 text-center text-slate-500 text-2xl'}>{element}</p>
  );
};

export default VisualizedBuildingElement;
