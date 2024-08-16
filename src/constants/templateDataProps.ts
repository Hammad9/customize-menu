const templateDataProps = {
 
  template3: {
    ProfileCover: {
      props: {
        displayName: 'MENU',
        designation: 'Enjoy our flavors',
        cover:
          'https://res.cloudinary.com/dwtlafbjn/image/upload/v1721403769/menu-bg_bzwu08.jpg',
        sx: {
          minHeight: 30,
          overflow: 'visible',
          '#heading-container': {
            position:"absolute",
            top:"50%",
             left: '50%',
             transform: 'translate(-50%, -50%)',
            margin: '0px',
            textAlign: 'center',
            zIndex: 10,
            fontSize:"34px",
            '::before': {
              position: 'static',
              background: 'linear-gradient(rgba(0, 0, 0, 0.29) 23.89%, rgb(7, 7, 7) 110%)',
              height: '100%',
              width: '100%',
              content: '""',
              zIndex: 9,
            },
          },

          '#displayName-Wrapper': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          },
          '#ProfileCover-container-content': {
            display: 'flex',
            flexDirection: 'column-reverse',
          },
          '#mainWrapper': {
            display: 'flex',
            flexDirection: 'column-reverse',
            position: 'static !important',
          },
          '#Avatar': {
            marginTop: '-50%',
          },
          '#AvatarContainer': {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '#coverImg-container': {
            // display: 'block',
          },
          h5: {
            textAlign: 'center',
          },
        },
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    ProfileFollowInfo: {
      props: {
        follower: '0',
        following: '0',
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    ProfileAbout: {
      props: {
        quote:
          'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
        country: 'Madagascar',
        email: 'ashlynn_ohara62@gmail.com',
        role: 'UI Designer',
        company: 'Gleichner, Mueller and Tromp',
        school: 'Nikolaus - Leuschke',
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    Testimonials: {
      props: {
        title: 'What Our Customer Say',
        metadata: [
          {
            description:
              'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
            image: '/avatar/avatar_default.jpg',
            name: 'Cristopher Cardenas',
            role: 'Leader',
          },
        ],
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    DownloadContact: {
      props: {
        sx: {
          marginBottom: '10px',
        },
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    ContainerV2: {
      props: {
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
    Icons: {
      props: {
        linkedinLink: 'https://www.linkedin.com/in/caitlyn.kerluke',
        twitterLink: 'https://www.twitter.com/caitlyn.kerluke',
        instagramLink: 'https://www.instagram.com/caitlyn.kerluke',
        facebookLink: 'https://www.facebook.com/caitlyn.kerluke',
        theme: {
          id: 246,
          textColor: '#f1b80f',
          accentColor: '#1bb0ce',
          backgroundColor: '#4f8699',
          cardBackgroundColor: '#f8e71c',
          cardIconColor: '#1bb0ce',
          cardTextColor: '#dad6ca',
          headlineColor: '#cdb36c',
          isCustom: false,
          name: '',
        },
      },
    },
  },
 
};
export default templateDataProps;
