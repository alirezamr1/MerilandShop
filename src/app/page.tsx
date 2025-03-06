export default function Home() {
  console.log('hello alireza');

  const renderName = () => {
    const name = 'MERILAND STORE WILL COME BACK SOON!';
    return <span>{name}</span>;
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>my first page</div>
      {renderName()}
    </div>
  );
}
