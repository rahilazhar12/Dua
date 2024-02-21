import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const NavBar = () => {

  //   const {t , i18n}= useTranslation("common");
//  useEffect(()=>{
//     if(localStorage.getItem("i18nextLng")?.length > 2 ){
//   i18next.changeLanguage("sa");
// }
//  },[]);

const {t , i18n} = useTranslation('common');
useEffect(()=>{
  //alert('pg loding');
  //current language store in the local storage
  let currentLang = localStorage.getItem('lang');
  i18n.changeLanguage(currentLang);
},[])


//  const changeLang = (e) =>{
//   i18n.changeLanguage(e.target.value);
//  }

const changeLang = (l) =>{
return()=>{
  // alert('confirm ' +l);
  i18n.changeLanguage(l);
  // set the current language save in  the local storage
  localStorage.setItem('lang',l);

}
}


  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand ms-4" to="#">
     <Link className="text-white fw-bold d-inline-flex NameLogo2">
           <Link to="/"  > <img src='./images/2logo.png' alt='logo' width={95} className='rounded-2  '/></Link>
             <Link to='/logo'  className="text-white my-4 mx-2 NameLogo"> 
                    شركة البناء الخليجية المصرية للتعمير 
                    <br/>
                    Gulf Egyptian Construction Co.
            </Link> 
        </Link>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  bg-dark nav-fill btn btn-sm-square rounded-circle"  aria-current="page" to="/"><i class="fa-solid fa-house-user"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{t('About')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">{t('Services')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">{t('Projects')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/partners">{t('Partners')}</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/contact">{t('Contact')}</Link>
        </li>
      </ul>
      <form className="d-flex justify-content-center">
      <button onClick={changeLang('en')}   className="btn btn-outline-success me-2" type="submit">English</button>
        <button onClick={changeLang('sa')}  className="btn btn-outline-success Arabic" type="submit">  عربي  </button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar