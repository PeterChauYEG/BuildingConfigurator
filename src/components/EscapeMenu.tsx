import { useHotkeys } from 'react-hotkeys-hook';
import { useState } from 'react';

const EscapeMenu = () => {
  const [visible, setVisible] = useState(false);

  useHotkeys(
    'esc',
    () => {
      setVisible(!visible);
    },
    [visible],
  );

  return (
    <div
      className={`${
        visible ? 'visible' : 'hidden'
      } absolute top-0 left-0 w-full h-full flex justify-center items-center`}>
      <div
        className={
          'bg-slate-100 w-[40vmin] h-[40vmin] rounded-xl p-8 z-[99] drop-shadow-lg'
        }>
        <p className={'text-slate-500 text-center text-xl mb-4'}>Hot keys</p>

        <div className={'flex flex-row justify-between'}>
          <p className={'text-slate-500'}>Next floor</p>
          <p className={'text-slate-500'}>CTRL + d, CTRL + w</p>
        </div>

        <div className={'flex flex-row justify-between'}>
          <p className={'text-slate-500'}>Previous floor</p>
          <p className={'text-slate-500'}>CTRL + a, CTRL + s</p>
        </div>

        <div className={'flex flex-row justify-between'}>
          <p className={'text-slate-500'}>Add floor</p>
          <p className={'text-slate-500'}>CTRL + enter</p>
        </div>

        <div className={'flex flex-row justify-between'}>
          <p className={'text-slate-500'}>Remove floor</p>
          <p className={'text-slate-500'}>CTRL + delete</p>
        </div>
      </div>
    </div>
  );
};

export default EscapeMenu;
