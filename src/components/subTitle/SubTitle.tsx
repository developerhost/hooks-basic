import React from 'react';

type Props = { subTitleText: string }

const SubTitle: React.VFC<Props> = React.memo(({ subTitleText }) => {
  console.log("subTitle");
  
  return (
  <h3>{subTitleText}</h3>
  )
});

export default SubTitle
