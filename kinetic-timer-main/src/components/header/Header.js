import { useState } from "react";
import "./Header.css";
import icons from "./icon1.png";
import icon from "./icon2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState({
    views: false,
    attendees: false,
    chat: false,
  });
  const [isOpenAttendees, setIsOpenAttendees] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isOpenInstructions, setIsOpenInstructions] = useState(false);
  const [isOpenTimeEdit, setIsOpenTimeEdit] = useState(false);
  return (
    <>
      <header>
        <div className="section-1">
          <div className="styling-logo">
            <h2>Meetn</h2>
          </div>
          <div className="styling-link">
            <a
              onClick={() =>
                setIsOpen({
                  views: true,
                  attendees: false,
                  instructions: false,
                  chat: false,
                  timeEdit: false,

                })
              }
            >
              Views
            </a>
            <a
              onClick={() =>
                setIsOpen({
                  views: false,
                  attendees: true,
                  instructions: false,
                  chat: false,
                  timeEdit: false,

                })
              }
            >
              Attendees
            </a>
            <a
              onClick={() =>
                setIsOpen({
                  views: false,
                  attendees: false,
                  chat: true,
                  instructions: false,
                  timeEdit: false,

                })
              }
            >
              Chat
            </a>
            <a
              onClick={() =>
                setIsOpen({
                  views: false,
                  attendees: false,
                  chat: false,
                  instructions: true,
                  timeEdit: false,
                })
              }
            >
              Instructions
            </a>
            <a
              onClick={() =>
                setIsOpen({
                  views: false,
                  attendees: false,
                  chat: false,
                  instructions: false,
                  timeEdit: true,
                })
              }
            >
              TimeEdit
            </a>
          </div>
        </div>
      </header>
      {isOpen.views ? (
        <div>
          <div className="sidebar-open">
            <div className="sidebar-menu">
              <div className="timer">
                {/* img */}
                <p>Timer</p>
              </div>
              <div
                className="close-icon"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="sidebar-body-height">
              <div className="sidebar-body">
                <div className="sub-title">
                  <h6>Time of Timer goes here </h6>
                </div>
                <div className="timer-box">
                  <div className="grid-items">
                    <div className="timer-action">
                      <div className="main-time">0</div>
                      <div className="main-time">4</div>
                      <div className="main-other-time">:</div>
                      <div className="main-time">5</div>
                      <div className="main-time">5</div>
                    </div>
                    <div className="btn-action">
                      <div className="btn-action-start">
                        <div><i className="fa fa-play-circle-o" aria-hidden="true"></i></div>
                        <div>start</div>
                      </div>
                      <div className="btn-action-cancel">
                        <div><i className="fa fa-times-circle-o" aria-hidden="true"></i></div>
                        <div>cancel</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-style">
                  <div className="subtitle">
                    <p>About this timer:</p>
                    <ul>
                      <li>Counting down from 5:00</li>
                      <li>No green or yellow indicators</li>
                      <li>Visible only to host</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-alignment">
              <div className="button-align">
                <button className="danger-button">Delete</button>
                <button className="gray-button">Edit</button>
              </div>
              <button
                className="green-button"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : isOpen.attendees ? (
        <div>
          <div className="sidebar-open">
            <div className="sidebar-menu">
              <div className="timer">
                {/* img */}
                <p>Timer</p>
              </div>
              <div
                className="close-icon"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="button-alignment">
              <div className="button-align">
                <button className="danger-button">Delete</button>
                <button className="gray-button">Exit</button>
              </div>
              <button
                className="green-button"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : isOpen.chat ? (
        <div>
          <div className="sidebar-open">
            <div className="sidebar-menu">
              <div className="timer">
                {/* img */}
                <p>Timer</p>
              </div>
              <div
                className="close-icon"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="sidebar-body-height">
              <div className="sidebar-body">
                <div className="sub-title">
                  <h6>Time of Timer goes here </h6>
                </div>
              </div>
            </div>
            <div className="button-alignment">
              <div className="button-align">
                <button className="danger-button">Delete</button>
                <button className="gray-button">Edit</button>
              </div>
              <button
                className="green-button"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>

      ) : isOpen.instructions ? (
        <div>
          <div className="sidebar-open">
            <div className="sidebar-menu">
              <div className="timer">
                {/* img */}
                <p>Timer</p>
              </div>
              <div
                className="close-icon"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="sidebar-body-height">
              <div className="sidebar-body">
                <div className="sub-title">
                  <h6>Instructions</h6>
                  <div className="content_instruction">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    maining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                     or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                       making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                        to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                        or non-characteristic words etc.
                  </p>
                  </div>
                  <h6>Trainning Video</h6>
                  <div className="gc_line">Play Trainning Video for Yourself</div>
                  <div className="gc_line">Play Trainning Video for Yourself</div>
                   </div>
              </div>
            </div>
            <div className="button-alignment">
              {/* <div className="button-align">
                <button className="danger-button">Delete</button>
                <button className="gray-button">Exit</button>
              </div> */}
              <button
                className="green-button"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
               OK
              </button>
            </div>
          </div>
        </div>

      ) : isOpen.timeEdit ? (
        <div>
          <div className="sidebar-open">
            <div className="sidebar-menu">
              <div className="timer">
                {/* img */}
                <p>Timer</p>
              </div>
              <div
                className="close-icon"
                onClick={() =>
                  setIsOpen({
                    views: false,
                    attendees: false,
                    chat: false,
                  })
                }
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="sidebar-body-height">
              <div className="sidebar-body">
                <div className="sub-title">
                  <h6>First Time State</h6>
                  <ul className="time-edit">
                    <li>Select a Timer</li>
                    <li> <button className="button_edit"> Add a Timer</button></li>
                  </ul>
                <div className="time_show"> 
                <ul>
                  <li className="time_tag">30 Seconds <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                  <li className="time_tag">1 Minute <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                  <li className="time_tag">2 Minute <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                  <li className="time_tag">3 Minute <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                  <li className="time_tag">4 Minute <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                  <li className="time_tag">5 Minute <button className="fa_edit"><i class="fa fa-pencil" aria-hidden="true"></i></button></li>
                </ul>
                </div>
                <div className="controls">
                <button className="btn">
                <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                <h6>Play</h6>
                </button>
                <button  className="btn">
                <i className="fa fa-pause-circle-o" aria-hidden="true"></i>
                <h6>Pause</h6>
                </button>
                <button class="btn">
                <i className="fa fa-stop-circle-o" aria-hidden="true"></i>
                <h6>Stop</h6>
                </button>
              </div>
                   </div>
              </div>
              <h6 className="color_green">instruction</h6>
            </div>
            <div className="button-alignment">
              {/* <div className="button-align">
                <button className="danger-button">Delete</button>
                <button className="gray-button">Exit</button>
              </div> */}
            </div>
          </div>
        </div>

      ) : null}
    </>
  );
};

export default Header;
{/* <div className="main-time"><p>0</p></div>
                        <div className="main-time"><p>4</p></div>
                        <div className="main-other-time"><p>:</p></div>
                        <div className="main-time"><p>5</p></div>
                        <div className="main-time"><p>5</p></div> */}