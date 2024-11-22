import styled from "styled-components";
import PropTypes from "prop-types";

const Avatar = ({ name, src }) => {
  return (
    <AvatarWrapper>
      {src ? (
        <AvatarImage src={src} alt={name} />
      ) : (
        <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
      )}
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Avatar;
