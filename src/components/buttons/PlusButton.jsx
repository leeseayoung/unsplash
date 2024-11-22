import IconButton from "../common/IconButton";

const PlusButton = () => {
  return (
    <IconButton ariaLabel="이 이미지를 컬렉션에 추가">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
      </svg>
    </IconButton>
  );
};

export default PlusButton;
