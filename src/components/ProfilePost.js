import { BsGrid3X3, BsFillChatFill, BsFillHeartFill } from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';

import {
  ProfilePostContainer,
  ProfilePostHeader,
  ProfileHeader,
  HeaderName,
  UserPosts,
  UserPost,
  PostImage,
  PostOverlay,
  OverlayContainer,
} from '../styles/profile';
import home from '../images/home.jpg';

function ProfilePost() {
  return (
    <ProfilePostContainer>
      <ProfilePostHeader>
        <ProfileHeader className="active">
          <BsGrid3X3 />
          <HeaderName>POSTS</HeaderName>
        </ProfileHeader>

        <ProfileHeader>
          <IoPricetagsOutline />
          <HeaderName>TAGS</HeaderName>
        </ProfileHeader>
      </ProfilePostHeader>

      <UserPosts>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
      </UserPosts>
    </ProfilePostContainer>
  );
}

export default ProfilePost;
