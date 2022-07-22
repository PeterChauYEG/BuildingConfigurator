type Props = {
  onExportClick: (e: any) => void;
};

const ExportPanel = ({ onExportClick }: Props) => {
  return (
    <div className={'flex justify-center'}>
      <button
        onClick={onExportClick}
        className={'bg-slate-400 rounded-xl p-2 min-w-[200px]'}>
        <p className="text-slate-200 text-2xl">Export</p>
      </button>
    </div>
  );
};

export default ExportPanel;
