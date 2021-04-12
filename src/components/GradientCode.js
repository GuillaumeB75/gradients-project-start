const GradientCode = (props) => {
  const { colorStart, colorEnd } = props;
  const linearGradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
  return <code className='mb-2'>background-image: {linearGradient};</code>;
};

export default GradientCode;