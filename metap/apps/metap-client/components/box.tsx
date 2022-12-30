const Box = ({ className }: { className?: string }) => {
  return (
    <div
      className={`hidden lg:block z-auto absolute w-20 h-20 rounded-lg border border-gray-700 ${className}`}
    ></div>
  );
};

export default Box;
