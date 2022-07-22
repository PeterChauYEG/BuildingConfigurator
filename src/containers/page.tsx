import { useLogPage } from '../hooks/useLogPage';
import { NavigationScreenNameEnum } from '../enums/NavigationScreenNames';

type PageProps = {
  pageName: NavigationScreenNameEnum;
  children: any;
};

const Page = ({ pageName, children }: PageProps) => {
  useLogPage(pageName);

  return (
    <div className={'w-full flex flex-col m-8 h-full'}>
      <div>{children}</div>
    </div>
  );
};

export default Page;
