import IconButton from "../common/IconButton";

const DownloadButton = () => {
  return (
    <IconButton ariaLabel="이 이미지를 다운로드">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
      </svg>
    </IconButton>
  );
};

export default DownloadButton;
