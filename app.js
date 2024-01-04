// DOM elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const inputUserInfo = document.querySelector('.user-info');
const inputPassword = document.querySelector('.password');
const btnTop = document.querySelector('.login-btn');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const loginUserInfo = document.querySelector('.login-user-info');
const loginPassword = document.querySelector('.login-password');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');

/****************************************************/
/****************************************************/

// Main Page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e =>
{
    if(e.target.classList[1] === 'main-btn')
    {
        goToLoginPage();
    }
});

const goToFeedsPage = () =>{

    if(inputUserInfo.value == "@janesmith" && inputPassword.value == "jane@smith26")
    {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    else
    {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
};

btnTop.addEventListener('click', () =>{
    goToFeedsPage();
});

// login page
modalX.addEventListener('click', () =>{
    loginModal.style.display = 'none';
});

const goLoginToFeeds = () =>{

    if(loginUserInfo.value == "@janesmith" && loginPassword.value == "jane@smith26")
    {
        mainPage.style.display = 'none';
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    else
    {
        loginModal.style.display = 'block';
    }
};

loginFormBtn.addEventListener('click', () =>{
    goLoginToFeeds();
});

//news fee page
//post modal

postBtn.addEventListener('click', () =>{
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = (x) =>{
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener('click', () =>{
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress', (e) =>{
    if(e.target.value !== ""){
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e) =>{
    if(e.target.value === ''){
        changeOpacity(0.5);
    }
});