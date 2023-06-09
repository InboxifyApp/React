import * as React from 'react';

const ClusterBox = ({ ...props }) => {
  console.log(props.Data.color);
  const bg = props.Data && props.Data.color ? props.Data.color : "#962134";

  return (
    <div className="w-3/12 flex justify-center items-center h-40 rounded-xl shadow-xl flex-col gap-2 " style={{ backgroundColor: bg }}>
      <p className="text-white font-bold">Cluster A</p>
      <p className="text-white font-bold">1253 Messages</p>
    </div>
  );
};

export default ClusterBox;
