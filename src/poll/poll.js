import react, { useState } from "react";
import Rating from "@mui/material/Rating";
import emailjs from "emailjs-com";
const Poll = (props) => {
  const [buissnesName, setBuissnesName] = useState("");
  const [buissnesID, setBuissnesID] = useState("");
  const [name, setName] = useState("");
  const [customerKind, setCustomerKind] = useState("");
  const [comments, setComments] = useState("");
  ///////////////////////////////////////////////////////////////
  const [isVisibleRatingHp9, setIsVisibleRatingHp9] = useState(false);
  const [isVisibleEndYear, setIsVisibleEndYear] = useState(false);
  const [isVisibleSpecial, setIsVisibleSpecial] = useState(false);
  const [isVisibleWeb, setIsVisibleWeb] = useState(false);
  const [isVisibleWhatsup, setIsVisibleWhatsup] = useState(false);
  const [isVisiblePrepaid, setIsVisiblePrepaid] = useState(false);
  const [isVisibleShowRoom, setIsVisibleShowRoom] = useState(false);
  const [isVisiblePhoneOrder, setIsVisiblePhoneOrder] = useState(false);
  const [isVisibleTelegram, setIsVisibleTelegram] = useState(false);
  const [isVisibleFacebook, setIsVisibleFacebook] = useState(false);
  //rating states
  const [ratingHappening9, setRatingHappening9] = useState(0);
  const [ratingEndYear, setRatingEndYear] = useState(0);
  const [ratingSpecialSale, setRatingSpecialSale] = useState(0);
  const [ratingWebSale, setRatingWebSale] = useState(0);
  const [ratingWhatsup, setRatingWhatsup] = useState(0);
  const [ratingPrepaid, setRatingPrepaid] = useState(0);
  const [ratingShowRoom, setRatingShowRoom] = useState(0);
  const [ratingPhoneOrder, setRatingPhoneOrder] = useState(0);
  const [ratingTelegram, setRatingTelegram] = useState(0);
  const [ratingFacebook, setRatingFacebook] = useState(0);

  const [msgSuccessToShow, setMsgSuccessToShow] = useState(false);
  const [msgFailedToShow, setMsgFailedToShow] = useState(false);
  const [msgLoadingToShow, setMsgLoadingToShow] = useState(false);

  const changeState = (event) => {
    let getValue = event.target.value;

    switch (event.target.id) {
      case "buissnesName":
        setBuissnesName(getValue);
        break;
      case "buissnesID":
        setBuissnesID(getValue);
        break;
      case "name":
        setName(getValue);
        break;
      case "customerKind":
        setCustomerKind(getValue);
        break;
      case "comments":
        setComments(getValue);
        break;
      case "nineHappeningSelect":
        if (getValue === "yes") {
          setIsVisibleRatingHp9(true);
          setRatingHappening9(0);
          break;
        }
        // both "no" and the first option of "select answer"
        setIsVisibleRatingHp9(false);
        break;

      case "endYearSelect":
        if (getValue === "yes") {
          setIsVisibleEndYear(true);
          setRatingEndYear(0);
          break;
        }
        setIsVisibleEndYear(false);
        break;
      case "specialSaleSelect":
        if (getValue === "yes") {
          setIsVisibleSpecial(true);
          setRatingSpecialSale(0);
          break;
        }
        setIsVisibleSpecial(false);
        break;
      case "webSaleSelect":
        if (getValue === "yes") {
          setIsVisibleWeb(true);
          setRatingWebSale(0);
          break;
        }
        setIsVisibleWeb(false);
        break;
      case "whatsupSelect":
        if (getValue === "yes") {
          setIsVisibleWhatsup(true);
          setRatingWhatsup(0);
          break;
        }
        setIsVisibleWhatsup(false);
        break;
      case "prepaidSelect":
        if (getValue === "yes") {
          setIsVisiblePrepaid(true);
          setRatingPrepaid(0);
          break;
        }
        setIsVisiblePrepaid(false);
        break;
      case "showRoomSelect":
        if (getValue === "yes") {
          setIsVisibleShowRoom(true);
          setRatingShowRoom(0);
          break;
        }
        setIsVisibleShowRoom(false);
        break;
      case "phoneOrderSelect":
        if (getValue === "yes") {
          setIsVisiblePhoneOrder(true);
          setRatingPhoneOrder(0);
          break;
        }
        setIsVisiblePhoneOrder(false);
        break;
      case "facebookSelect":
        if (getValue === "yes") {
          setIsVisibleFacebook(true);
          setRatingFacebook(0);
          break;
        }
        setIsVisibleFacebook(false);
        break;
      case "telegramSelect":
        if (getValue === "yes") {
          setIsVisibleTelegram(true);
          setRatingTelegram(0);
          break;
        }
        setIsVisibleTelegram(false);
        break;
    }
  };

  const checkData = (event) => {
    event.preventDefault();
    setMsgLoadingToShow(true);
    let cKind,
      rHappening9,
      rEndYear,
      rSpecialSale,
      rWebSale,
      rWhatsup,
      rPrepaid,
      rShowRoom,
      rPhoneOrder,
      rFacebook,
      rTelegram;
    if (customerKind === "store") {
      cKind = "חנות";
    } else if (customerKind === "distrebuter") {
      cKind = "מפיץ";
    } else {
      cKind = "אין מידע";
    }
    if (ratingHappening9 === 0) {
      rHappening9 = "הפנינג 9 - אין מידע";
    } else {
      rHappening9 = "הפנינג 9 - " + ratingHappening9;
    }
    if (ratingEndYear === 0) {
      rEndYear = "מבצעי סוף שנה - אין מידע";
    } else {
      rEndYear = "מבצעי סוף שנה - " + ratingEndYear;
    }
    if (ratingSpecialSale === 0) {
      rSpecialSale = "מבצעים מיוחדים/באנדלים - אין מידע";
    } else {
      rSpecialSale = "מבצעים מיוחדים/באנדלים - " + ratingSpecialSale;
    }
    if (ratingWebSale === 0) {
      rWebSale = "רכישות באתר - אין מידע";
    } else {
      rWebSale = "רכישות באתר - " + ratingWebSale;
    }
    if (ratingWhatsup === 0) {
      rWhatsup = "תפוצה ואטס אפ - אין מידע";
    } else {
      rWhatsup = "תפוצה ואטס אפ - " + ratingWhatsup;
    }
    if (ratingPrepaid === 0) {
      rPrepaid = "חבילות פריפייד - אין מידע";
    } else {
      rPrepaid = "חבילות פריפייד - " + ratingPrepaid;
    }
    if (ratingShowRoom === 0) {
      rShowRoom = "אולם תצוגה - אין מידע";
    } else {
      rShowRoom = "אולם תצוגה - " + ratingShowRoom;
    }
    if (ratingPhoneOrder === 0) {
      rPhoneOrder = "הזמנות בטלפון - אין מידע";
    } else {
      rPhoneOrder = "הזמנות בטלפון - " + ratingPhoneOrder;
    }
    if (ratingFacebook === 0) {
      rFacebook = "דף פייסבוק - אין מידע";
    } else {
      rFacebook = "דף פייסבוק - " + ratingFacebook;
    }
    if (ratingTelegram === 0) {
      rTelegram = "ערוץ טלגרם - אין מידע";
    } else {
      rTelegram = "ערוץ טלגרם - " + ratingTelegram;
    }

    let templateParams = {
      buissnesName: buissnesName,
      buissnesID: buissnesID,
      name: name,
      customerKind: cKind,
      ratingHappening9: rHappening9,
      ratingEndYear: rEndYear,
      ratingSpecialSale: rSpecialSale,
      ratingWebSale: rWebSale,
      ratingWhatsup: rWhatsup,
      ratingPrepaid: rPrepaid,
      ratingShowRoom: rShowRoom,
      ratingPhoneOrder: rPhoneOrder,
      ratingFacebook: rFacebook,
      ratingTelegram: rTelegram,
      comments: comments,
    };

    emailjs
      .send(
        "", //service id
        "", //template the developer build in emailjs
        templateParams, //template  of data you want to send in email
        "" //here you need your user
      )
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          setMsgSuccessToShow(true);
          setMsgFailedToShow(false);
          setMsgLoadingToShow(false);
        },
        function (error) {
          // console.log("FAILED...", error);
          setMsgFailedToShow(true);
          setMsgSuccessToShow(false);
          setMsgLoadingToShow(false);
        }
      );
  };

  return (
    <div className="formHeb">
      <form onSubmit={checkData}>
        <h2 className="headRed">{props.title}</h2>
        <div className="divPaddingTop">
          <label htmlFor="buissnesName">שם עסק:</label>
          <input
            type="text"
            className="customInput"
            id="buissnesName"
            placeholder="יש למלא שם עסק"
            onChange={changeState}
            required
          />
        </div>
        <div className="divPaddingTop">
          <label htmlFor="buissnesID">ע.מ. - ח.פ.</label>
          <input
            type="text"
            className="customInput"
            id="buissnesID"
            placeholder="יש למלא מזהה עסק"
            onChange={changeState}
            required
          />
        </div>
        <div className="divPaddingTop">
          <label htmlFor="name">שם ממלא:</label>
          <input
            type="text"
            className="customInput"
            id="name"
            placeholder="יש למלא שם ממלא"
            onChange={changeState}
            required
          />
        </div>
        <div className="divPaddingTop">
          <label htmlFor="customerKind">סוג לקוח:</label>
          <select
            id="customerKind"
            className="customInput"
            onChange={changeState}
          >
            <option vlaue="">בחר מהרשימה</option>
            <option value="store">חנות</option>
            <option value="distrebuter">מפיץ</option>
          </select>
        </div>
        <h2>מעט שאלות וסיימנו</h2>
        <div className="divPaddingTop">
          <fieldset>
            <legend>הפנינג 9 - 9 מוצרים ב 9 ש"ח כולל מע"מ</legend>
            <div>
              <label htmlFor="nineHappeningSelect">האם השתתפת באירוע?</label>
            </div>
            <div>
              <select
                id="nineHappeningSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleRatingHp9 && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingHappening9"
                    value={ratingHappening9}
                    onChange={(event, newValue) => {
                      setRatingHappening9(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>מבצעי סוף שנת 2021 - בין 7/11 ועד 24/12</legend>
            <div>
              <label htmlFor="endYearSelect">
                האם ביצעת רכישות במסגרת המבצע?
              </label>
            </div>
            <div>
              <select
                id="endYearSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleEndYear && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingEndYear"
                    value={ratingEndYear}
                    onChange={(event, newValue) => {
                      setRatingEndYear(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>
              מבצעים אחרים, סגנון חיסול מלאי דגם/חומרים/באנדלים ...
            </legend>
            <div>
              <label htmlFor="specialSaleSelect">
                האם ביצעת רכישות עקב פרסום מבצעים?
              </label>
            </div>
            <div>
              <select
                id="specialSaleSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleSpecial && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingSpecialSale"
                    value={ratingSpecialSale}
                    onChange={(event, newValue) => {
                      setRatingSpecialSale(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>אתר המכירות הסיטונאי TMDEALZ.COM</legend>
            <div>
              <label htmlFor="webSaleSelect">
                האם ביקרת/ביצעת רכישות באתר?
              </label>
            </div>
            <div>
              <select
                id="webSaleSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleWeb && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingWebSale"
                    value={ratingWebSale}
                    onChange={(event, newValue) => {
                      setRatingWebSale(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>תפוצה ומספרי הואטס אפ 0774661073 ו 0525486669</legend>
            <div>
              <label htmlFor="whatsupSelect">
                האם כיוונו/עזרו לך להזמין ולקבל מענה?
              </label>
            </div>
            <div>
              <select
                id="whatsupSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleWhatsup && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingWhatsup"
                    value={ratingWhatsup}
                    onChange={(event, newValue) => {
                      setRatingWhatsup(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>חבילות PREPAID עם מחיר מוזל</legend>
            <div>
              <label htmlFor="prepaidSelect">האם רכשת חבילה מהם?</label>
            </div>
            <div>
              <select
                id="prepaidSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisiblePrepaid && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingPrepaid"
                    value={ratingPrepaid}
                    onChange={(event, newValue) => {
                      setRatingPrepaid(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>אולם התצוגה של החברה</legend>
            <div>
              <label htmlFor="showRoomSelect">
                האם ביקרתם/ביצעתם רכישות בו?
              </label>
            </div>
            <div>
              <select
                id="showRoomSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleShowRoom && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingShowRoom"
                    value={ratingShowRoom}
                    onChange={(event, newValue) => {
                      setRatingShowRoom(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>הזמנה טלפונית ב 0774661073 ו/או 0525486669</legend>
            <div>
              <label htmlFor="phoneOrderSelect">האם ביצעת הזמנות בטלפון?</label>
            </div>
            <div>
              <select
                id="phoneOrderSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisiblePhoneOrder && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingPhoneOrder"
                    value={ratingPhoneOrder}
                    onChange={(event, newValue) => {
                      setRatingPhoneOrder(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>
              דף הפייסבוק הרשמי{" "}
              <a href="https://www.facebook.com/TopTronics2008" target="_blank">
                עדכונים וחדשות טופ-טרוניקס
              </a>
            </legend>
            <div>
              <label htmlFor="facebookSelect">האם ביקרת בדף?</label>
            </div>
            <div>
              <select
                id="facebookSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleFacebook && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingFacebook"
                    value={ratingFacebook}
                    onChange={(event, newValue) => {
                      setRatingFacebook(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>
              ערוץ הטיליגרם הרשמי{" "}
              <a href="https://t.me/top_tronics" target="_blank">
                top-tronics Ltd.
              </a>
            </legend>
            <div>
              <label htmlFor="telegramSelect">האם ביקרת בערוץ?</label>
            </div>
            <div>
              <select
                id="telegramSelect"
                className="customInput"
                onChange={changeState}
              >
                <option vlaue="">בחר מהרשימה</option>
                <option value="yes">כן</option>
                <option value="no">לא</option>
              </select>
            </div>
            {isVisibleTelegram && (
              <>
                <div className="headRed">דרג את החוויה שלך</div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    id="ratingTelegram"
                    value={ratingTelegram}
                    onChange={(event, newValue) => {
                      setRatingTelegram(newValue);
                    }}
                  />
                </div>
              </>
            )}
          </fieldset>
        </div>
        <div className="divPaddingTop">
          <fieldset>
            <legend>
              נשאר לשמוע הצעות לשיפור ו/או מוצרים שתרצו למצוא אצלנו:
            </legend>
            <div>
              <textarea
                className="customInput"
                id="comments"
                onChange={changeState}
              ></textarea>
            </div>
          </fieldset>
        </div>
        {msgSuccessToShow && (
          <h2 className="headRed">תודה על השתתפותך בשאלון</h2>
        )}
        {msgFailedToShow && (
          <h2 className="headRed">אירעה תקלה בשליחת הטופס</h2>
        )}
        {msgLoadingToShow && <h2>נא להמתן לשליחת הטופס . . .</h2>}
        <div className="lastDiv">
          <input type="submit" value="שלח משוב"></input>
        </div>
      </form>
    </div>
  );
};

export default Poll;
