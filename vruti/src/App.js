import './App.css';
import { BsEnvelope,BsWhatsapp,BsChevronLeft,BsChevronRight,BsStarFill,BsStarHalf} from "react-icons/bs";
import { FaFacebookF,FaCertificate, FaTwitter,FaLinkedin,FaPlay,FaQuoteRight,FaGraduationCap,FaUniversity,FaHandPointRight, FaUserFriends,FaChalkboardTeacher} from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TiSocialGooglePlus,TiSocialInstagram } from "react-icons/ti";
import { GiTeacher,GiUpgrade } from "react-icons/gi";
import { HiArrowLongRight,HiUserGroup,HiComputerDesktop } from "react-icons/hi2";
import { CiYoutube,CiPenpot } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import myimg from './image/logo-white.svg'
import myimg1 from './image/logo-blue.svg'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var icon_menu=[
  {ico:<FaFacebookF></FaFacebookF>},
  {ico:<FaTwitter></FaTwitter>},
  {ico:<TiSocialGooglePlus></TiSocialGooglePlus>},
  {ico:<FaLinkedin></FaLinkedin>},
  {ico:<TiSocialInstagram></TiSocialInstagram>},
  {ico:<CiYoutube></CiYoutube>},
  {ico:<BsWhatsapp></BsWhatsapp>},
]
var slider = [require('./image/slider1.webp'), require('./image/slider2.webp'), require('./image/slider3.webp'),require('./image/slider4.webp'),require('./image/slider5.webp'),require('./image/slider6.webp'),require('./image/slider7.webp'),require('./image/slider8.webp'),require('./image/slider9.webp')]
var arr_obj=[
  {name:'HOME'},
  {name:'COURSES'},
  {name:'ACTIVITIES'},
  {name:'BLOG'},
  {name:'KNOW US'},
  {name:'GET IN TOUCH'},
  {name:'STUDENT ZONE'},
]
var courses = [
  { img: require('./image/course1.webp'), name: 'Development Courses' },
  { img: require('./image/course2.jpg'), name: 'Design Courses' },
  { img: require('./image/course3.jpg'), name: 'Programming IT' },
  { img: require('./image/course4.jpg'), name: 'Trendy Courses' },
  { img: require('./image/course5.jpg'), name: 'Civil-Mech. Engineering' },
  { img: require('./image/course6.jpg'), name: 'Business Development' }
]
var counter= [
  { icon:<FaUserFriends></FaUserFriends>,count:"18000+", name: 'HAPPY STUDENTS'},
  { icon:<CiPenpot></CiPenpot>,count:"10+", name: 'CERTIFICATION APPROVAL'},
  { icon:<FaChalkboardTeacher></FaChalkboardTeacher>,count:"100+", name: 'CERTIFIED TEACHERS'},
  { icon:<FaGraduationCap></FaGraduationCap>,count:"12000+", name: 'STUDENTS PLACEDS'} 
]
var read_our= [
  { icon:<GiTeacher class='sv1'></GiTeacher>, 
    name: 'Industry Experts As Trainers',
    pragraph:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  { icon:<HiUserGroup class='sv2'></HiUserGroup>, 
    name: 'Latest Curriculum',
    pragraph:"We x  Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
  },
  { icon:<HiComputerDesktop class='sv3'></HiComputerDesktop>, 
    name: 'Latest Technology',
    pragraph:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
  },
  { icon:<MdSupportAgent  class='sv4'></MdSupportAgent>, 
  name: 'Industry Experts As Trainers',
  pragraph:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
},
{ icon:<GiUpgrade class='sv5'></GiUpgrade>, 
  name: 'Latest Curriculum',
  pragraph:"We will be provided free upgradation for any newer version of the course you have."
},
{ icon:<FaHandsHoldingChild class='sv6'></FaHandsHoldingChild>, 
  name: 'Latest Technology',
  pragraph:"We will provide you lifetime support on all the courses you learned from us."
},
]
var stu_place=[
  {img:require('./image/stu1.png')},
  {img:require('./image/stu2.png')},
  {img:require('./image/stu3.png')},
  {img:require('./image/stu4.png')},
  {img:require('./image/stu5.png')},
  {img:require('./image/stu6.png')},
  {img:require('./image/stu7.png')},
  {img:require('./image/stu8.png')},
  {img:require('./image/stu9.png')},
  {img:require('./image/stu10.png')},
  {img:require('./image/stu11.png')},
  {img:require('./image/stu12.png')}

]
var our_course=[
  {pra:"Multimedia Training Institute In Varachha"},
  {pra:"spoken english class in katargam"},
  {pra:"Web development training in katargam"},
  {pra:"Best animation training course"},
  {pra:"C++ Programming Language Training Institute In Varachha"},
  {pra:"Python Training Institute In Varachha"},
  {pra:"Adobe illustrator design"},
  {pra:"Adobe xd design training institute in varachha"},
  {pra:"Multimedia Training Institute In Varachha"},
  {pra:"spoken english class in katargam"},
  {pra:"Web development training in katargam"},
  {pra:"Best animation training course"},
]

function App(){
  return(
    <div class="Firstpage">
    {/* First Header */}
    <div class='head'>
      <div class='container'>
        <div class="main-head">
          <div class='urlinfo'>
            <a class='inbox'><BsEnvelope></BsEnvelope><span>info@cdmi.in</span></a>
            <a class='certificate'><FaCertificate></FaCertificate><span> Verify Certificate</span></a>
          </div>
          <div class='qus'>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div class='icon'>
            <a>
                {
                    icon_menu.map((ele)=>{
                          return(
                               <li>{ele.ico}</li>
                          )
                     })
                }
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Second Header */}
    <div class='logo-head'>
      <div class='container'>
        <div class='menu-head'>
            <div class="logo">
              <img src={myimg1}></img>
            </div>
            <div class='menu'>
              <ul className='pt-4'> 
                {
                    arr_obj.map((ele)=>{
                          return(
                               <li>{ele.name}</li>
                          )
                     })
                }
              </ul>
            </div>
        </div>
      </div>
    </div>
    {/* Slider */}
    <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
        {
            slider.map((ele) => {
            return (
              <div class='item'>
                <img src={ele}></img>
              </div>
            )
          })
        }
      </OwlCarousel>
  {/* Course Contain */}
    <div class='course-info'>
      <div class='container'>
          <div class='course-head'>
            <p class='first-head'>
              <hr></hr>
              <span>CREATIVE COURSE</span>
            </p>
            <p class='second-head'>
                <h1>OFFERED COURSES</h1>
            </p>
          </div>
          <div className='top-course'>
                    {
                      courses.map((ele, ind) => {
                        return (
                          <div key={ind}>
                            <img src={ele.img}></img>
                            <a>{ele.name}</a><hr></hr>
                            <div className=' flex knowmor'>
                              <p>
                                <i><BsStarFill></BsStarFill></i>
                                <i><BsStarFill></BsStarFill></i>
                                <i><BsStarFill></BsStarFill></i>
                                <i><BsStarFill></BsStarFill></i>
                                <i><BsStarHalf></BsStarHalf></i>
                              </p>
                              <button><a>Know more..!</a></button>
                            </div>
                          </div>
                        )
                      })
                    }
            </div>
            <div class='viewall'>
                 <button>View All Courses<HiArrowLongRight></HiArrowLongRight></button>
            </div>
      </div>
    </div>
    {/* About Us */}
    <div class='about-us'>
              <div class='about-head'>
                  <p class='first-head'>
                    <hr></hr>
                    <span>ABOUT US</span>
                  </p>
                  <p class='second-head'>
                      <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
                  </p>
                  <p class='about-info'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.  
                  </p>
                  <div class='about-enroll'>
                    <button>Enroll Now..!<HiArrowLongRight></HiArrowLongRight></button>
                  </div>
              </div>
             <div class='aboutus-img'>
                  <div class='about-photo'>
                    <img src={require(`./image/about-us.jpg`)} style={{width:'600px'}}></img>
                  </div>
                  <p className='play'>
                    <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
                  </p>
             </div>
    </div>
    {/* Review */}
    <div class='review'>
        <div class='counter'>
            <div class='container'>
              <div class='good-review '>
                <div className='count'>
                    {
                      counter.map((ele, ind) => {
                        return (
                            <div key={ind}>
                              <p>{ele.icon}</p>
                              <h1>{ele.count}</h1>
                              <h4>{ele.name}</h4>
                            </div>
                        )
                      })
                    }
                </div>
              </div>
            </div>
        </div> 
    </div>
    {/* Happy Student */}
    <div class='happy-us'>
          <div className='container'>
              <div class='test-main'>
                <div class='test-head'>
                        <p class='test1-head'>
                          <hr></hr>
                          <span>HAPPY STUDENTS</span>
                        </p>
                        <p class='test2-head'>
                            <h1>ALUMNI SPEAK</h1>
                        </p>
                        <p className='test-icon'>
                          <p><FaQuoteRight></FaQuoteRight></p>
                          <div>
                            <p><BsChevronLeft></BsChevronLeft></p>
                            <p><BsChevronRight></BsChevronRight></p>
                          </div>
                        </p>
                        <p class='test-info'>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.
                        </p>
                        <p class='test-person'>
                          <img src={require(`./image/testperson.jpg`)}></img>
                          <span>
                              <p>Goti Shruti</p>
                              <i>
                                 <h5>Android Developer </h5>
                                 <p>@ KD Infotach</p>
                              </i>
                          </span>
                        </p>
                    </div>
                  <div class='test-img'>
                        <div class='test-photo'>
                            <img src={require(`./image/testimonial_shape.png`)}></img>
                        </div>
                  </div>
                </div>
          </div>
    </div>
    {/* Why Choose Creative */}
    <div class='creative-info'>
      <div class='container'>
          <div class='creative-head'>
            <p class='creative1-head'>
              <hr></hr>
              <span>READ OUR DIFFERENCE</span>
            </p>
            <p class='creative2-head'>
                <h1>WHY CHOOSE CREATIVE</h1>
            </p>
          </div>
          <div class='only-creative'>
              {
                read_our.map((ele, ind) => {
                  return (
                    <div key={ind}>
                      <h1>{ele.icon}</h1>
                      <h3>{ele.name}</h3>
                      <p>{ele.pragraph}</p>
                    </div>
                  )
                })
              }
          </div>
      </div> 
    </div>
    <div class='placement'>
      <div class='container'>
        <div class='student-head'>
              <p class='stu1-head'>
                <hr></hr>
                <span>STUDENT PLACEMENT</span>
              </p>
              <p class='stu2-head'>
                  <h1>OUR RECRUITMENT PARTNERS</h1>
              </p>
              <div>
                  <OwlCarousel className='owl-theme' items={5} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                      {
                          stu_place.map((ele) => {
                          return (
                              <img src={ele.img}></img>
                          )
                        })
                      }
                  </OwlCarousel>
              </div>
        </div>
        <div className='demand'>
          <p className='our_d'>Our Demanded Course -</p>
          <div className='parent_btn'>
             <div className='btn3'>
                {
                    our_course.map((ele, ind) => {
                      return (
                        <div key={ind}>
                          <p class='multi'>{ele.pra}</p>
                        </div>
                        
                      )
                  })
                }
              </div>
              
            <p className='show'>Show More</p>
          </div>
        </div>
      </div>
    </div>

      {/*Footer  */}
    <footer>
      <div className='footer-bg'>
        <div className='footer-logo'>
          <img src={myimg}></img>
          <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
          <span>FOLLOW US ON</span>
          <p className='icon1'>  
              <i>
                {
                    icon_menu.map((ele)=>{
                          return(
                               <li>{ele.ico}</li>
                          )
                     })
                }
              </i>
          </p>
        </div>
        <div className='row2'>
          <p>FEATURE LINKS</p>
            <ul>
            <li><i><FaHandPointRight></FaHandPointRight></i>About Us</li>
            <li><i><FaHandPointRight></FaHandPointRight></i>Blogs</li>
            <li><i><FaHandPointRight></FaHandPointRight></i>Join Us</li>
            <li><i><FaHandPointRight></FaHandPointRight></i>Company Login</li>
            <li><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</li>
            </ul>
        </div>
        <div className='row3'>
          <p className='contact' >CONTACT US</p>
          <h4>HEAD OFFICE - YOGICHOWK</h4>
          <p className='address'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
          <p className='number'>Mo : +91 90333 16003</p>
          <h4>OTHER BRANCHES</h4>
          <ul>
            <li><i><FaUniversity></FaUniversity></i>Katargam</li>
            <li><i><FaUniversity></FaUniversity></i>Mota Varachha</li>
            <li><i><FaUniversity></FaUniversity></i> Adajan</li>
            <li><i><FaUniversity></FaUniversity></i> Navsari</li>
            </ul>
        </div>
      </div>
    </footer>
  </div>  
  )
}
export default App;