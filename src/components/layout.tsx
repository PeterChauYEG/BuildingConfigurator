export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'flex flex-col justify-between'} id="outer-container">
      <div className={'flex flex-col'}>
        <main id="page-wrap" className={'flex'}>
          {children}
        </main>
      </div>
    </div>
  );
}
