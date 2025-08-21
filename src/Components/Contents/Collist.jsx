import React, { useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { asset } from '../../assets/asset';
import AOS from 'aos'
import FeedbackApp from '../../Pages/Feedback';
const lists = [
  {
    name: 'Decorators',
    img: asset.Decoration,
    costumers: '3486+',
    link: 'decor',
    desc: "We provide best decorators for weddings and events.",
    varieties: [
      {
        id: "stage", title: "Stage Decoration",
        img: asset.Decoration1, desc: "The stage is designed with a stylish backdrop, floral arrangements, and soft lighting. It serves as the focal point, blending elegance and charm to create a perfect setting for memorable moments."
      },
      {
        id: "floral", title: "Floral Decoration",
        img: asset.floral, desc: "A vibrant arrangement of fresh and artificial flowers in elegant colors, creating a natural and refreshing atmosphere. The floral accents enhance the beauty of the venue, symbolizing joy and celebration."
      },
      {
        id: "theme", title: "Theme Based Decoration",
        img: asset.theme, desc: "The décor is styled around a chosen concept, blending colors, props, and designs to create a cohesive look. Every detail—from backdrop to table settings—follows the theme, offering guests a visually appealing and immersive experience that reflects elegance and celebration."
      }
    ],

  },
  {
    name: 'Photographers',
    img: asset.Photographer,
    costumers: '3293+',
    link: 'photos',
    desc: "Professional photographers to capture memories.",
    varieties: [
      {
        id: "candid", title: "Candid Photography",
        img: asset.Candid, desc: "Capturing natural expressions, emotions, and spontaneous moments, candid photography brings authenticity and life to your wedding or event, making every frame a heartfelt memory."
      },
      {
        id: "traditional", title: "Traditional Photography",
        img: asset.tradi, desc: "Classic and posed shots that preserve rituals and key moments in detail, ensuring every important part of your special day is beautifully documented."
      },
      {
        id: "cinematic", title: "Cinematic Videography",
        img: asset.cinema, desc: "A storytelling style of videography with creative angles, music, and effects to transform your wedding moments into a movie-like experience."
      }
    ]
  },
  {
    name: 'Pre wedding',
    img: asset.prewedding,
    costumers: '3121+',
    link: 'prewed',
    desc: "Beautiful pre-wedding shoot packages.",
    varieties: [
      {
        id: "outdoor", title: "Outdoor Shoot",
        img: asset.prewed1, desc: "Set in natural landscapes like beaches, gardens, or historical sites, outdoor pre-wedding shoots create romantic and timeless visuals filled with natural charm."
      },
      {
        id: "studio", title: "Studio Shoot",
        img: asset.prewed2, desc: "Stylish indoor shoots with controlled lighting, backdrops, and creative setups, giving couples elegant and polished portraits."
      },
      {
        id: "conceptual", title: "Conceptual Shoot",
        img: asset.prewed3, desc: "A customized shoot based on a unique theme or story, blending creativity, costumes, and locations to reflect the couple’s personality."
      }
    ]
  },
  {
    name: 'Makeup Artist',
    img: asset.makeup,
    costumers: '1238+',
    link: 'mk',
    desc: "Experienced bridal and party makeup artists.",
    varieties: [
      {
        id: "bridal", title: "Bridal Makeup",
        img: asset.mk1, desc: "A flawless makeover designed for brides, enhancing natural beauty with professional techniques to ensure stunning looks that last throughout the wedding ceremony."
      },
      {
        id: "party", title: "Party Makeup",
        img: asset.mk3, desc: "Elegant and trendy makeup styles for parties and events, making you look glamorous while still comfortable and confident."
      },
      {
        id: "hd", title: "HD Makeup",
        img: asset.mk2, desc: "High-definition makeup designed for photoshoots and events, giving a radiant, smooth, and camera-ready look that lasts long hours."
      }
    ]
  },
  {
    name: 'Invitations',
    img: asset.invitation,
    costumers: '283+',
    link: 'invitations',
    desc: "Custom wedding invitation designs.",
    varieties: [
      {
        id: "digital", title: "Digital Invitations",
        img: asset.invi1, desc: "Modern, creative e-invitations with animations, music, and personalized messages, making it easy to share and eco-friendly."
      },
      {
        id: "printed", title: "Printed Invitations",
        img: asset.invi2, desc: "Traditional and elegant printed cards with premium paper, embossing, and designs that reflect the theme of your event."
      },
      {
        id: "luxury", title: "Luxury Invitations",
        img: asset.invi3, desc: "Exclusive invites with intricate designs, custom packaging, and embellishments, giving a royal touch to your special occasion."
      }
    ]
  },
  {
    name: 'Dj',
    img: asset.dj,
    costumers: '2344+',
    link: 'dj',
    desc: "Top DJs to make your event rocking.",
    varieties: [
      {
        id: "weddingdj", title: "Wedding DJ",
        img: asset.dj1, desc: "Professional DJs specializing in weddings, playing the perfect mix of traditional and modern tracks to keep the crowd engaged and entertained."
      },
      {
        id: "clubdj", title: "Club Style DJ",
        img: asset.dj2, desc: "High-energy mixes with club vibes, lights, and beats that transform your event into a lively party experience."
      },
      {
        id: "bollywooddj", title: "Bollywood DJ",
        img: asset.dj3, desc: "A perfect playlist of Bollywood hits, remixes, and dance numbers, making everyone hit the dance floor with joy."
      }
    ]
  },
  {
    name: 'Venues',
    img: asset.Decoration1,
    costumers: '3244+',
    link: 'venue',
    desc: "Luxury venues for weddings and parties.",
    varieties: [
      {
        id: "banquet", title: "Banquet Halls",
        img: asset.venue1, desc: "Spacious and elegant indoor halls equipped with lighting, décor, and modern facilities, suitable for grand weddings and receptions."
      },
      {
        id: "outdoorvenue", title: "Outdoor Venues",
        img: asset.Wedding3, desc: "Beautiful lawns, gardens, and open spaces offering a refreshing setting for ceremonies under the sky."
      },
      {
        id: "destination", title: "Destination Venues",
        img: asset.venue3, desc: "Exotic and scenic locations for destination weddings, combining celebration with travel and memorable experiences."
      }
    ]
  },
  {
    name: 'Party',
    img: asset.Wedding1,
    costumers: '2345+',
    link: 'party',
    desc: "Plan your birthday and private parties with us.",
    varieties: [
      {
        id: "birthday", title: "Bachelor Parties",
        img: asset.party2, desc: "Fun-filled birthday celebrations with customized décor, themes, cakes, and entertainment to make the day special."
      },
      {
        id: "corporate", title: "Pre wedding Parties",
        img: asset.dj2, desc: "Well-planned events with professional setups, catering, and entertainment tailored for office gatherings and celebrations."
      },
      {
        id: "private", title: "Private Parties",
        img: asset.party1, desc: "Intimate gatherings with personalized décor, food, and entertainment, perfect for close friends and family moments."
      }
    ]
  },
  {
    name: 'Bride planning',
    img: asset.Wedding1,
    costumers: '2345+',
    link: 'bridal',
    desc: "Complete bridal planning solutions.",
    varieties: [
      {
        id: "outfits", title: "Bridal Outfits",
        img: asset.outfits, desc: "Designer bridal wear customized with style, comfort, and elegance, ensuring the bride looks stunning on her big day."
      },
      {
        id: "jewelry", title: "Bridal Jewelry",
        img: asset.jewelry, desc: "Exquisite jewelry collections with modern and traditional designs to complete the bridal look with grace."
      },
      {
        id: "planning", title: "Full Bridal Planning",
        img: asset.fullplanning, desc: "End-to-end bridal services covering outfits, makeup, jewelry, and accessories, helping brides enjoy a stress-free wedding journey."
      }
    ]
  }
];

const Collist = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 1000,
    });
  }, []);
  const { service } = useParams();
  const selected = lists.find(item => item.link === service);

  if (!selected) {
    return <h2 style={{ padding: '20px' }}>Service not found!</h2>;
  }

  return (
    <>
      <div className='colist-style' data-aos="fade-in">
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', borderRight: '6px solid maroon' }}>
          <h3>{selected.name} Varieties</h3>
          {selected.varieties ? (
            <ul style={{ listStyle: 'none', padding: 0, }}>
              {selected.varieties.map(v => (
                <li
                  key={v.id}
                  style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', marginTop: '80px' }}
                >
                  <img
                    src={v.img}
                    alt={v.title}
                    style={{

                    }} className='col-img'
                  />
                  <Link
                    to={`${v.id}`}
                    style={{ textDecoration: "none", color: "black", paddingLeft: '20px', fontWeight: '600', textTransform: 'uppercase' }}
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No varieties available.</p>
          )}
        </div>

        <div style={{ flex: '2' }}>
          <Outlet context={{ selected }} />
        </div>
      </div>
      <FeedbackApp />
    </>
  );
};

export default Collist;
