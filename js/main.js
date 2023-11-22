// Book Data
const booksData = [
  {
    id: 1,
    title: 'Гарри Поттер',
    author: 'Джоанна Роулинг',
    price: 120,
    language: 'русский',
    img: './img/harry_potter.jpg',
  },
  {
    id: 2,
    title: 'Python',
    author: 'Samuel Hack',
    price: 720,
    language: 'english',
    img: './img/python.jpg',
  },

  {
    id: 3,
    title: 'Мартин Иден',
    author: 'Джек Лондон',
    price: 830,
    language: 'русский',
    img: './img/martin_eden.jpg',
  },
  {
    id: 10,
    title: 'Head First JS',
    author: 'Eric Freeman',
    price: 1480,
    language: 'english',
    img: './img/head_first_js.jpg',
  },
  {
    id: 5,
    title: 'Learning React',
    author: 'Alex Banks',
    price: 1960,
    language: 'english',
    img: './img/learning_react.jpg',
  },
  {
    id: 6,
    title: 'Гений',
    author: 'Теодор Драйзер',
    price: 720,
    language: 'русский',
    img: './img/geniy.jpg',
  },
  {
    id: 7,
    title: 'Modern Fantasy',
    author: 'David Pringle',
    price: 2000,
    language: 'english',
    img: './img/modern_fantasy.jpg',
  },
  {
    id: 8,
    title: 'Мертвые Души',
    author: 'Николай Гоголь',
    price: 60,
    language: 'русский',
    img: './img/myortvie_dushi.jpg',
  },
  {
    id: 9,
    title: 'Clean Code',
    author: 'Robert Martin',
    price: 1640,
    language: 'english',
    img: './img/clean-code.jpg',
  },
  {
    id: 10,
    title: 'Белый Клык',
    author: 'Джек Лондон',
    price: 180,
    language: 'русский',
    img: './img/beliy_klik.jpg',
  },
  {
    id: 11,
    title: 'Learning SQL',
    author: 'Alan Beaulieu',
    price: 1480,
    language: 'english',
    img: './img/learning_sql.jpg',
  },
  {
    id: 12,
    title: 'Мы',
    author: 'Евгений Замятин',
    price: 90,
    language: 'русский',
    img: './img/mi.jpg',
  },
];

const container = document.createElement('div');
container.classList.add('container');
const header = document.createElement('header');
header.classList.add('header');
const headerLogo = document.createElement('a');
headerLogo.classList.add('logo');
headerLogo.href = '/';
headerLogo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  resetFilteration();
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop >= 40) {
    header.style.background = '#be8f3d';
    header.style.boxShadow = '0px 2px 8px 3px';
    filterBox.style.background = '#be8f3d';
    filterBox.style.boxShadow = '0px 1px 4px 2px';
  } else if (scrollTop < 15) {
    header.style.background = '#8da784';
    filterBox.style.background = '#8da784';
    header.style.boxShadow = '';
    filterBox.style.boxShadow = '';
  }
});

headerLogo.innerText = 'book store';
const headerRightSide = document.createElement('div');
headerRightSide.classList.add('right_blog');
const authorLabel = document.createElement('label');
authorLabel.htmlFor = 'author';
authorLabel.innerText = 'author:';
const authorcheckboxInput = document.createElement('input');
authorcheckboxInput.type = 'checkbox';
authorcheckboxInput.id = 'author';
authorcheckboxInput.addEventListener('change', () => {
  authorLabel.classList.toggle('active');
});
const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.spellcheck = false;
searchInput.id = 'search_input';
searchInput.placeholder = 'search...';
searchInput.addEventListener('search', (e) => {
  if (authorcheckboxInput.checked == false) {
    let searchFilteringByBookTitle = booksData.filter((data) =>
      data.title
        .toLowerCase()
        .trim()
        .includes(e.currentTarget.value.toLowerCase().trim())
    );
    showBooks(searchFilteringByBookTitle);
    if (searchFilteringByBookTitle.length < 1) {
      alert('Search result by book title not found!');
      e.currentTarget.value = '';
      showBooks(booksData);
    }
  } else {
    let searchFilteringByBookAuthor = booksData.filter((data) =>
      data.author
        .toLowerCase()
        .trim()
        .includes(e.currentTarget.value.toLowerCase().trim())
    );
    showBooks(searchFilteringByBookAuthor);
    if (searchFilteringByBookAuthor.length < 1) {
      alert('Search result by author not found!');
      e.currentTarget.value = '';
      showBooks(booksData);
    }
  }
});

searchInput.addEventListener('input', (e) => {
  (e.currentTarget.value.length < 1 || e.currentTarget.value == '') &&
    showBooks(booksData);
});

const addBtn = document.createElement('button');
addBtn.classList.add('btn', 'add_btn');
addBtn.innerText = 'add book';
const usdPrice = document.createElement('p');
usdPrice.innerText = '10.2 USD';
usdPrice.classList.add('usd_price');
const main = document.createElement('main');
main.classList.add('main');
const filterBox = document.createElement('div');
filterBox.classList.add('filter_box');
const rangeFilter = document.createElement('input');
rangeFilter.type = 'range';
rangeFilter.min = 50;
rangeFilter.max = 2000;
rangeFilter.value = 50;
rangeFilter.step = 10;
rangeFilter.classList.add('range_filter');
let filterNumber = null;
const filterPriceText = document.createElement('strong');
filterPriceText.classList.add('filter_price_text');
filterPriceText.innerText = `TJS`;
const filterPriceInput = document.createElement('input');
filterPriceInput.value = rangeFilter.value;
filterPriceInput.type = 'number';
filterPriceInput.classList.add('filter_price_input');
filterPriceInput.addEventListener('change', (e) => {
  let inputValue = Number(e.currentTarget.value);
  if (inputValue < 50) {
    alert('Minimum value is 50');
    e.currentTarget.value = 50;
  } else if (inputValue > 2000) {
    alert('Maximum value is 2000');
    e.currentTarget.value = 2000;
  }
  rangeFilter.value = inputValue;
  handleRangeInput(e);
});

rangeFilter.addEventListener('input', handleRangeInput);
function handleRangeInput(e) {
  filterNumber = e.currentTarget.value;
  filterPriceInput.value = `${filterNumber}`;
  filterBooksByPrice(booksData);
}
const languageFilterBlock = document.createElement('div');
languageFilterBlock.classList.add('language_filter_block');
const russianLanguageFilterLabel = document.createElement('label');
russianLanguageFilterLabel.innerText = 'Русский';
russianLanguageFilterLabel.htmlFor = 'russian';
const russianLanguageFilterRadioButton = document.createElement('input');
russianLanguageFilterRadioButton.type = 'radio';
russianLanguageFilterRadioButton.id = 'russian';
russianLanguageFilterRadioButton.name = 'language_filter';
russianLanguageFilterRadioButton.addEventListener('change', () => {
  let filterByRussianLanguage = booksData.filter(
    (book) =>
      book.language.toLowerCase() ==
      russianLanguageFilterLabel.innerText.toLowerCase()
  );
  showBooks(filterByRussianLanguage);
});
const englishLanguageFilterLabel = document.createElement('label');
englishLanguageFilterLabel.innerText = 'English';
englishLanguageFilterLabel.htmlFor = 'english';
const englishLanguageFilterRadioButton = document.createElement('input');
englishLanguageFilterRadioButton.type = 'radio';
englishLanguageFilterRadioButton.id = 'english';
englishLanguageFilterRadioButton.name = 'language_filter';
englishLanguageFilterRadioButton.addEventListener('change', () => {
  let filterByEnglishLanguage = booksData.filter(
    (book) =>
      book.language.toLowerCase() ==
      englishLanguageFilterLabel.innerText.toLowerCase()
  );
  showBooks(filterByEnglishLanguage);
});
const allLanguageFilterLabel = document.createElement('label');
allLanguageFilterLabel.innerText = 'All';
allLanguageFilterLabel.htmlFor = 'all';
const allLanguageFilterRadioButton = document.createElement('input');
allLanguageFilterRadioButton.type = 'radio';
allLanguageFilterRadioButton.id = 'all';
allLanguageFilterRadioButton.checked = true;
allLanguageFilterRadioButton.name = 'language_filter';
allLanguageFilterRadioButton.addEventListener('change', () => {
  showBooks(booksData);
});
const resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';
resetBtn.type = 'reset';
resetBtn.id = 'reset_btn';
resetBtn.classList.add('btn');
resetBtn.addEventListener('click', () => {
  resetFilteration();
  resetBtn.classList.add('cleared');

  resetBtn.innerText = 'Filter Cleared';
  setTimeout(() => {
    resetBtn.classList.remove('cleared');
    resetBtn.innerText = 'Reset';
  }, 1500);
});
function resetFilteration() {
  filterNumber = 50;
  rangeFilter.value = filterNumber;
  filterPriceInput.value = filterNumber;
  allLanguageFilterRadioButton.checked = true;
  searchInput.value = '';
  authorcheckboxInput.checked = false;
  authorLabel.classList.remove('active');
  showBooks(booksData);
}

const bookSection = document.createElement('section');
bookSection.classList.add('book_section');

function showBooks(data) {
  bookSection.innerHTML = '';
  data.forEach((book) => {
    const card = document.createElement('figure');
    card.classList.add('card');

    const titleEl = document.createElement('h2');
    titleEl.innerText = book.title;
    const imageEl = document.createElement('img');
    imageEl.src = book['img'];

    const authorEl = document.createElement('h3');
    authorEl.innerText = book.author;
    authorEl.classList.add('author_element');

    const priceEl = document.createElement('p');
    priceEl.innerText = `${book.price} TJS`;
    priceEl.classList.add('price_element');

    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.classList.add('btn', 'buy_btn');

    bookSection.appendChild(card);
    card.appendChild(titleEl);
    card.appendChild(imageEl);
    card.appendChild(authorEl);
    card.appendChild(priceEl);
    card.appendChild(buyBtn);
  });
}
showBooks(booksData);

function filterBooksByPrice(books) {
  let filteredBooks = books.filter((book) => book.price == filterNumber);
  showBooks(filteredBooks);
}

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal_overlay');
modalOverlay.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    modalOverlay.classList.contains('show') &&
      modalOverlay.classList.remove('show');
  }, 300);
  document.body.style.overflow = 'auto';
});
const modalBox = document.createElement('div');
modalBox.classList.add('modal_box');
modalBox.addEventListener('click', (e) => {
  e.stopPropagation();
});
const addFormEl = document.createElement('form');
const addModalTitle = document.createElement('h2');
addModalTitle.innerText = 'Add Book';
const formInputContent = document.createElement('div');
formInputContent.classList.add('form_input_content');
const formLabelInnerText = ['Title:', 'Image Source:', 'Author:', 'Price:'];
const formLabelHTMLFor = ['title', 'img-source', 'author-name', 'price'];
const formInputPlaceholder = [
  'Enter book name',
  'Enter img source',
  'Enter author name',
  'Enter price',
];
const formInputType = ['text', 'text', 'text', 'number'];
let formLabel = null;
let formInputEL = null;
for (let i = 0; i < 4; i++) {
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input_wrapper');
  formLabel = document.createElement('label');
  formLabel.innerText = formLabelInnerText[i];
  formLabel.htmlFor = formLabelHTMLFor[i];
  formInputEL = document.createElement('input');
  formInputEL.classList.add('form_input');
  formInputEL.id = formLabelHTMLFor[i];
  formInputEL.placeholder = formInputPlaceholder[i];
  formInputEL.type = formInputType[i];
  inputWrapper.appendChild(formLabel);
  inputWrapper.appendChild(formInputEL);
  formInputContent.appendChild(inputWrapper);
}
const submitBtn = document.createElement('button');
submitBtn.classList.add('btn', 'submit_btn');
formInputContent.appendChild(submitBtn);
submitBtn.innerText = 'Submit';

addFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});

function addBook() {
  const formInputs = document.querySelectorAll('.form_input');
  let newBook = {
    id: new Date().getTime(),
  };
  let notEmpty = false;
  formInputs.forEach((eachInput) => {
    if (eachInput.value !== '') {
      notEmpty = true;
      if (eachInput.id == 'title') {
        if (eachInput.value != '') {
          newBook.title = eachInput.value;
        }
      } else if (eachInput.id == 'img-source') {
        if (eachInput.value != '') {
          newBook.img = eachInput.value;
        }
      } else if (eachInput.id == 'author-name') {
        if (eachInput.value != '') {
          newBook.author = eachInput.value;
        }
      } else if (eachInput.id == 'price') {
        if (eachInput.value != '') {
          newBook.price = eachInput.value;
        }
      }
    }
  });

  if (notEmpty == true) {
    booksData.push(newBook);
    modalOverlay.click();
    showBooks(booksData);
  } else if (notEmpty == false) {
    alert('Please fill in all fields!');
    document.getElementById('title').focus();
  }
}

addBtn.addEventListener('click', () => {
  modalOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

document.body.appendChild(container);
container.appendChild(modalOverlay);
modalOverlay.appendChild(modalBox);
modalBox.appendChild(addFormEl);
addFormEl.appendChild(addModalTitle);
addFormEl.appendChild(formInputContent);
container.appendChild(header);
header.appendChild(headerLogo);
header.appendChild(headerRightSide);
headerRightSide.appendChild(authorLabel);
headerRightSide.appendChild(authorcheckboxInput);
headerRightSide.appendChild(searchInput);
headerRightSide.appendChild(addBtn);
headerRightSide.appendChild(usdPrice);
container.appendChild(main);
main.appendChild(bookSection);
main.appendChild(filterBox);
filterBox.appendChild(rangeFilter);
filterBox.appendChild(filterPriceInput);
filterPriceInput.insertAdjacentElement('afterend', filterPriceText);
filterBox.appendChild(languageFilterBlock);
languageFilterBlock.appendChild(russianLanguageFilterLabel);
russianLanguageFilterLabel.appendChild(russianLanguageFilterRadioButton);
languageFilterBlock.appendChild(englishLanguageFilterLabel);
englishLanguageFilterLabel.appendChild(englishLanguageFilterRadioButton);
languageFilterBlock.appendChild(allLanguageFilterLabel);
allLanguageFilterLabel.appendChild(allLanguageFilterRadioButton);
filterBox.appendChild(resetBtn);
