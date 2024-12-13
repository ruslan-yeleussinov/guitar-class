import { studentsData } from "./students-data.js";

const currentYear = [2024, 2025];

function generateStudentContent(student) {
  return `
  <!-- sidenav -->
  <span style="font-size:30px;cursor:pointer" onclick="openNav()" class="navopenbtn">&#9776;</span>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="/index.html">Главная</a>
    <a href="/programm.html">Программа</a>
    <a href="/students/artem.html">Артём</a>
    <a href="/students/amir.html">Амир</a>
    <a href="/students/iskender.html">Искендер</a>      
    <a href="/students/kasim.html">Касым</a>
    <a href="/students/nikita.html">Никита</a>
    <a href="/students/amirali.html">Амирали</a>
    <a href="/students/sultan.html">Султан</a>
    <a href="/students/ilya.html">Илья</a>
    <a href="/students/dias.html">Диас</a>
    <a href="/students/katya.html">Катя</a>
    <a href="/students/marsel.html">Марсель</a>
  </div>

  <!-- NAV SECTION -->
  <section class="nav-section">
    <div class="name-nav-div">
      <div class="name-div blocks">
        <h2 class="name">${student.nameRus}</h2>
      </div>          
      <a href="#progress-section"><div class="nav1 blocks navs">Прогресс произведений</div></a>
      <a href="#metronome-section"><div class="nav2 blocks navs">Работа с метрономом</div></a>     
      <a href="#exams-history-section"><div class="nav3 blocks navs">История экзаменов</div></a>
      <a href="#grades-table-section"><div class="nav4 blocks navs">Табель успеваемости</div></a>
      <a href="#solfeggio-section"><div class="nav5 blocks navs">Сольфеджио</div></a>
    </div>
  </section>

  <!-- PROGRESS SECTION -->
  <section class="progress-section" id="progress-section">
    <h3 class="progress-title">Прогресс произведений</h3> 

    <div class="big-div">
      <div class="label-div">
        <label for="file">${student.currentPiece1}</label>
      </div>
      <div class="progress-div">
        <progress id="file" max="100" value="25" class="lines ${student.nameEng}-progress1" onclick="add25('.${student.nameEng}-progress1')">${student.currentPiece1}</progress>
      </div>
    </div> 

    <div class="big-div">
      <div class="label-div">
        <label for="file">${student.currentPiece2}</label>
      </div>
      <div class="progress-div">
        <progress id="file" max="100" value="75" class="lines ${student.nameEng}-progress2" onclick="add25('.${student.nameEng}-progress2')">${student.currentPiece2}</progress>
      </div>
    </div> 

    <div class="big-div">
      <div class="label-div">
        <label for="file">${student.currentPiece3}</label>
      </div>
      <div class="progress-div">
        <progress id="file" max="100" value="50" class="lines ${student.nameEng}-progress3" onclick="add25('.${student.nameEng}-progress3')">${student.currentPiece3}</progress>
      </div>
    </div>

    <div class="progress-description">
      <p class="progress-descr-p">* 25% - игра с большими остановками</p>
      <p class="progress-descr-p">* 50% - игра с маленькими остановками</p>
      <p class="progress-descr-p">* 75% - ритмичная игра без остановок</p>
      <p class="progress-descr-p">* 100% - уверенная, свободная игра с динамикой</p>
    </div>

  </section>

  <!-- METRONOME SECTION -->
  <section class="metronome-section" id="metronome-section">
    <h3 class="metronome-title">Работа с метрономом</h3>
    <div class="metronome-table-div">
        <table class="metronome-table">
          <tr>
            <th class="nx">1x</th>
            <th class="vert">одна нота</th> 
            <th class="vert">гамма</th>
            <th class="vert">хроматика</th>
            <th class="vert">секвенция</th>
            <th class="nx">2x</th>
            <th class="vert">одна нота</th> 
            <th class="vert">гамма</th>
            <th class="vert">хроматика</th>
            <th class="vert">секвенция</th>
            <th class="nx">4x</th>
            <th class="vert">одна нота</th> 
            <th class="vert">гамма</th>
            <th class="vert">хроматика</th>
            <th class="vert">секвенция</th>
            <th class="nx">4x</th>
            <th class="vert">одна нота</th> 
            <th class="vert">гамма</th>
            <th class="vert">хроматика</th>
            <th class="vert">секвенция</th>
          </tr>
          <tr>
            <td class="bpm">60</td>
            <td class="x ${student.nameEng}-x60n"></td>
            <td class="x ${student.nameEng}-x60g"></td>
            <td class="x ${student.nameEng}-x60h"></td>
            <td class="x ${student.nameEng}-x60s"></td>
            <td class="bpm">60</td>
            <td class="x ${student.nameEng}-x60nn"></td>
            <td class="x ${student.nameEng}-x60gg"></td>
            <td class="x ${student.nameEng}-x60hh"></td>
            <td class="x ${student.nameEng}-x60ss"></td>
            <td class="bpm">60</td>
            <td class="x ${student.nameEng}-x60nnnn"></td>
            <td class="x ${student.nameEng}-x60gggg"></td>
            <td class="x ${student.nameEng}-x60hhhh"></td>
            <td class="x ${student.nameEng}-x60ssss"></td>
            <td class="bpm">95</td>
            <td class="x ${student.nameEng}-x95nnnn"></td>
            <td class="x ${student.nameEng}-x95gggg"></td>
            <td class="x ${student.nameEng}-x95hhhh"></td>
            <td class="x ${student.nameEng}-x95ssss"></td>
          </tr>
          <tr>
            <td class="bpm">70</td>
            <td class="x ${student.nameEng}-x70n"></td>
            <td class="x ${student.nameEng}-x70g"></td>
            <td class="x ${student.nameEng}-x70h"></td>
            <td class="x ${student.nameEng}-x70s"></td>
            <td class="bpm">70</td>
            <td class="x ${student.nameEng}-x70nn"></td>
            <td class="x ${student.nameEng}-x70gg"></td>
            <td class="x ${student.nameEng}-x70hh"></td>
            <td class="x ${student.nameEng}-x70ss"></td>
            <td class="bpm">65</td>
            <td class="x ${student.nameEng}-x65nnnn"></td>
            <td class="x ${student.nameEng}-x65gggg"></td>
            <td class="x ${student.nameEng}-x65hhhh"></td>
            <td class="x ${student.nameEng}-x65ssss"></td>
            <td class="bpm">100</td>
            <td class="x ${student.nameEng}-x100nnnn"></td>
            <td class="x ${student.nameEng}-x100gggg"></td>
            <td class="x ${student.nameEng}-x100hhhh"></td>
            <td class="x ${student.nameEng}-x100ssss"></td>
          </tr>
          <tr>
            <td class="bpm">80</td>
            <td class="x ${student.nameEng}-x80n"></td>
            <td class="x ${student.nameEng}-x80g"></td>
            <td class="x ${student.nameEng}-x80h"></td>
            <td class="x ${student.nameEng}-x80s"></td>
            <td class="bpm">80</td>
            <td class="x ${student.nameEng}-x80nn"></td>
            <td class="x ${student.nameEng}-x80gg"></td>
            <td class="x ${student.nameEng}-x80hh"></td>
            <td class="x ${student.nameEng}-x80ss"></td>
            <td class="bpm">70</td>
            <td class="x ${student.nameEng}-x70nnnn"></td>
            <td class="x ${student.nameEng}-x70gggg"></td>
            <td class="x ${student.nameEng}-x70hhhh"></td>
            <td class="x ${student.nameEng}-x70ssss"></td>
            <td class="bpm">105</td>
            <td class="x ${student.nameEng}-x105nnnn"></td>
            <td class="x ${student.nameEng}-x105gggg"></td>
            <td class="x ${student.nameEng}-x105hhhh"></td>
            <td class="x ${student.nameEng}-x105ssss"></td>
          </tr>
          <tr>
            <td class="bpm">90</td>
            <td class="x ${student.nameEng}-x90n"></td>
            <td class="x ${student.nameEng}-x90g"></td>
            <td class="x ${student.nameEng}-x90h"></td>
            <td class="x ${student.nameEng}-x90s"></td>
            <td class="bpm">90</td>
            <td class="x ${student.nameEng}-x90nn"></td>
            <td class="x ${student.nameEng}-x90gg"></td>
            <td class="x ${student.nameEng}-x90hh"></td>
            <td class="x ${student.nameEng}-x90ss"></td>
            <td class="bpm">75</td>
            <td class="x ${student.nameEng}-x75nnnn"></td>
            <td class="x ${student.nameEng}-x75gggg"></td>
            <td class="x ${student.nameEng}-x75hhhh"></td>
            <td class="x ${student.nameEng}-x75ssss"></td>
            <td class="bpm">110</td>
            <td class="x ${student.nameEng}-x110nnnn"></td>
            <td class="x ${student.nameEng}-x110gggg"></td>
            <td class="x ${student.nameEng}-x110hhhh"></td>
            <td class="x ${student.nameEng}-x110ssss"></td>
          </tr>
          <tr>
            <td class="bpm">100</td>
            <td class="x ${student.nameEng}-x100n"></td>
            <td class="x ${student.nameEng}-x100g"></td>
            <td class="x ${student.nameEng}-x100h"></td>
            <td class="x ${student.nameEng}-x100s"></td>
            <td class="bpm">100</td>
            <td class="x ${student.nameEng}-x100nn"></td>
            <td class="x ${student.nameEng}-x100gg"></td>
            <td class="x ${student.nameEng}-x100hh"></td>
            <td class="x ${student.nameEng}-x100ss"></td>
            <td class="bpm">80</td>
            <td class="x ${student.nameEng}-x80nnnn"></td>
            <td class="x ${student.nameEng}-x80gggg"></td>
            <td class="x ${student.nameEng}-x80hhhh"></td>
            <td class="x ${student.nameEng}-x80ssss"></td>
            <td class="bpm">115</td>
            <td class="x ${student.nameEng}-x115nnnn"></td>
            <td class="x ${student.nameEng}-x115gggg"></td>
            <td class="x ${student.nameEng}-x115hhhh"></td>
            <td class="x ${student.nameEng}-x115ssss"></td>
          </tr>
          <tr>
            <td class="bpm">110</td>
            <td class="x ${student.nameEng}-x110n"></td>
            <td class="x ${student.nameEng}-x110g"></td>
            <td class="x ${student.nameEng}-x110h"></td>
            <td class="x ${student.nameEng}-x110s"></td>
            <td class="bpm">110</td>
            <td class="x ${student.nameEng}-x110nn"></td>
            <td class="x ${student.nameEng}-x110gg"></td>
            <td class="x ${student.nameEng}-x110hh"></td>
            <td class="x ${student.nameEng}-x110ss"></td>
            <td class="bpm">85</td>
            <td class="x ${student.nameEng}-x85nnnn"></td>
            <td class="x ${student.nameEng}-x85gggg"></td>
            <td class="x ${student.nameEng}-x85hhhh"></td>
            <td class="x ${student.nameEng}-x85ssss"></td>
            <td class="bpm">120</td>
            <td class="x ${student.nameEng}-x120nnnn"></td>
            <td class="x ${student.nameEng}-x120gggg"></td>
            <td class="x ${student.nameEng}-x120hhhh"></td>
            <td class="x ${student.nameEng}-x120ssss"></td>
          </tr>
          <tr>
            <td class="bpm">120</td>
            <td class="x ${student.nameEng}-x120n"></td>
            <td class="x ${student.nameEng}-x120g"></td>
            <td class="x ${student.nameEng}-x120h"></td>
            <td class="x ${student.nameEng}-x120s"></td>
            <td class="bpm">120</td>
            <td class="x ${student.nameEng}-x120nn"></td>
            <td class="x ${student.nameEng}-x120gg"></td>
            <td class="x ${student.nameEng}-x120hh"></td>
            <td class="x ${student.nameEng}-x120ss"></td>
            <td class="bpm">90</td>
            <td class="x ${student.nameEng}-x90nnnn"></td>
            <td class="x ${student.nameEng}-x90gggg"></td>
            <td class="x ${student.nameEng}-x90hhhh"></td>
            <td class="x ${student.nameEng}-x90ssss"></td>
            <td class="bpm">125</td>
            <td class="x ${student.nameEng}-x125nnnn"></td>
            <td class="x ${student.nameEng}-x125gggg"></td>
            <td class="x ${student.nameEng}-x125hhhh"></td>
            <td class="x ${student.nameEng}-x125ssss"></td>
          </tr>
        </table>
    </div>
  </section>

  <!-- EXAMS HISTORY -->
  <section class="exams-history-section" id="exams-history-section">
    <h3 class="exams-title">История экзаменов</h3>

    <!-- 1 CLASS -->

    <table class="exams-table">
      <caption class="class">1 класс</caption>
      <tr>
        <th colspan="3">Экзамен (декабрь)</th>
      </tr>
      <tr>
        <td>${student.exam1Dec[1]}</td>
        <td>${student.exam1Dec[2]}</td>
        <td rowspan="3" class="grades">${student.exam1Dec[0]}</td>
      </tr>
      <tr>
        <td>${student.exam1Dec[3]}</td>
        <td>${student.exam1Dec[4]}</td>
      </tr>
      <tr>
        <td>${student.exam1Dec[5]}</td>
        <td>${student.exam1Dec[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (май)</th>
      </tr>
      <tr>
        <td>${student.exam1May[1]}</td>
        <td>${student.exam1May[2]}</td>
        <td rowspan="3" class="grades">${student.exam1May[0]}</td>
      </tr>
      <tr>
        <td>${student.exam1May[3]}</td>
        <td>${student.exam1May[4]}</td>
      </tr>
      <tr>
        <td>${student.exam1May[5]}</td>
        <td>${student.exam1May[6]}</td>
      </tr>
    </table>

    <!-- 2 CLASS -->

    <table class="exams-table">
      <caption class="class">2 класс</caption>
      <tr>
        <th colspan="3">Тех/зачет (октябрь)</th>
      </tr>
      <tr>
        <td>${student.exam2Oct[1]}</td>
        <td>${student.exam2Oct[2]}</td>
        <td rowspan="3" class="grades">${student.exam2Oct[0]}</td>
      </tr>
      <tr>
        <td>${student.exam2Oct[3]}</td>
        <td>${student.exam2Oct[4]}</td>
      </tr>
      <tr>
        <td>${student.exam2Oct[5]}</td>
        <td>${student.exam2Oct[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (декабрь)</th>
      </tr>
      <tr>
        <td>${student.exam2Dec[1]}</td>
        <td>${student.exam2Dec[2]}</td>
        <td rowspan="3" class="grades">${student.exam2Dec[0]}</td>
      </tr>
      <tr>
        <td>${student.exam2Dec[3]}</td>
        <td>${student.exam2Dec[4]}</td>
      </tr>
      <tr>
        <td>${student.exam2Dec[5]}</td>
        <td>${student.exam2Dec[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Тех/зачет (февраль)</th>
      </tr>
      <tr>
        <td>${student.exam2Feb[1]}</td>
        <td>${student.exam2Feb[2]}</td>
        <td rowspan="3" class="grades">${student.exam2Feb[0]}</td>
      </tr>
      <tr>
        <td>${student.exam2Feb[3]}</td>
        <td>${student.exam2Feb[4]}</td>
      </tr>
      <tr>
        <td>${student.exam2Feb[5]}</td>
        <td>${student.exam2Feb[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (май)</th>
      </tr>
      <tr>
        <td>${student.exam2May[1]}</td>
        <td>${student.exam2May[2]}</td>
        <td rowspan="3" class="grades">${student.exam2May[0]}</td>
      </tr>
      <tr>
        <td>${student.exam2May[3]}</td>
        <td>${student.exam2May[4]}</td>
      </tr>
      <tr>
        <td>${student.exam2May[5]}</td>
        <td>${student.exam2May[6]}</td>
      </tr>
    </table>

    <!-- 3 CLASS -->

    <table class="exams-table">
      <caption class="class">3 класс</caption>
      <tr>
        <th colspan="3">Тех/зачет (октябрь)</th>
      </tr>
      <tr>
        <td>${student.exam3Oct[1]}</td>
        <td>${student.exam3Oct[2]}</td>
        <td rowspan="3" class="grades">${student.exam3Oct[0]}</td>
      </tr>
      <tr>
        <td>${student.exam3Oct[3]}</td>
        <td>${student.exam3Oct[4]}</td>
      </tr>
      <tr>
        <td>${student.exam3Oct[5]}</td>
        <td>${student.exam3Oct[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (декабрь)</th>
      </tr>
      <tr>
        <td>${student.exam3Dec[1]}</td>
        <td>${student.exam3Dec[2]}</td>
        <td rowspan="3" class="grades">${student.exam3Dec[0]}</td>
      </tr>
      <tr>
        <td>${student.exam3Dec[3]}</td>
        <td>${student.exam3Dec[4]}</td>
      </tr>
      <tr>
        <td>${student.exam3Dec[5]}</td>
        <td>${student.exam3Dec[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Тех/зачет (февраль)</th>
      </tr>
      <tr>
        <td>${student.exam3Feb[1]}</td>
        <td>${student.exam3Feb[2]}</td>
        <td rowspan="3" class="grades">${student.exam3Feb[0]}</td>
      </tr>
      <tr>
        <td>${student.exam3Feb[3]}</td>
        <td>${student.exam3Feb[4]}</td>
      </tr>
      <tr>
        <td>${student.exam3Feb[5]}</td>
        <td>${student.exam3Feb[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (май)</th>
      </tr>
      <tr>
        <td>${student.exam3May[1]}</td>
        <td>${student.exam3May[2]}</td>
        <td rowspan="3" class="grades">${student.exam3May[0]}</td>
      </tr>
      <tr>
        <td>${student.exam3May[3]}</td>
        <td>${student.exam3May[4]}</td>
      </tr>
      <tr>
        <td>${student.exam3May[5]}</td>
        <td>${student.exam3May[6]}</td>
      </tr>
    </table>

    <!-- 4 CLASS -->

    <table class="exams-table">
      <caption class="class">4 класс</caption>
      <tr>
        <th colspan="3">Тех/зачет (октябрь)</th>
      </tr>
      <tr>
        <td>${student.exam4Oct[1]}</td>
        <td>${student.exam4Oct[2]}</td>
        <td rowspan="3" class="grades">${student.exam4Oct[0]}</td>
      </tr>
      <tr>
        <td>${student.exam4Oct[3]}</td>
        <td>${student.exam4Oct[4]}</td>
      </tr>
      <tr>
        <td>${student.exam4Oct[5]}</td>
        <td>${student.exam4Oct[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (декабрь)</th>
      </tr>
      <tr>
        <td>${student.exam4Dec[1]}</td>
        <td>${student.exam4Dec[2]}</td>
        <td rowspan="3" class="grades">${student.exam4Dec[0]}</td>
      </tr>
      <tr>
        <td>${student.exam4Dec[3]}</td>
        <td>${student.exam4Dec[4]}</td>
      </tr>
      <tr>
        <td>${student.exam4Dec[5]}</td>
        <td>${student.exam4Dec[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Тех/зачет (февраль)</th>
      </tr>
      <tr>
        <td>${student.exam4Feb[1]}</td>
        <td>${student.exam4Feb[2]}</td>
        <td rowspan="3" class="grades">${student.exam4Feb[0]}</td>
      </tr>
      <tr>
        <td>${student.exam4Feb[3]}</td>
        <td>${student.exam4Feb[4]}</td>
      </tr>
      <tr>
        <td>${student.exam4Feb[5]}</td>
        <td>${student.exam4Feb[6]}</td>
      </tr>
      <tr>
        <th colspan="3">Экзамен (май)</th>
      </tr>
      <tr>
        <td>${student.exam4May[1]}</td>
        <td>${student.exam4May[2]}</td>
        <td rowspan="3" class="grades">${student.exam4May[0]}</td>
      </tr>
      <tr>
        <td>${student.exam4May[3]}</td>
        <td>${student.exam4May[4]}</td>
      </tr>
      <tr>
        <td>${student.exam4May[5]}</td>
        <td>${student.exam4May[6]}</td>
      </tr>
    </table>

    <!-- 5 CLASS -->

    <table class="exams-table">
      <caption class="class">5 класс (выпускной)</caption>
      <tr>
        <th colspan="3">Прослушивание (декабрь)</th>
      </tr>
      <tr>
        <td>${student.exam5Dec[1]}</td>
        <td>${student.exam5Dec[2]}</td>
        <td rowspan="2" class="grades">${student.exam5Dec[0]}</td>
      </tr>
      <tr>
        <td>${student.exam5Dec[3]}</td>
        <td>${student.exam5Dec[4]}</td>
      </tr>
      <tr>
        <th colspan="3">Прослушивание (февраль)</th>
      </tr>
      <tr>
        <td>${student.exam5Feb[1]}</td>
        <td>${student.exam5Feb[2]}</td>
        <td rowspan="2" class="grades">${student.exam5Feb[0]}</td>
      </tr>
      <tr>
        <td>${student.exam5Feb[3]}</td>
        <td>${student.exam5Feb[4]}</td>
      </tr>
      <tr>
        <th colspan="3">Прослушивание (март)</th>
      </tr>
      <tr>
        <td>${student.exam5Mar[1]}</td>
        <td>${student.exam5Mar[2]}</td>
        <td rowspan="4" class="grades">${student.exam5Mar[0]}</td>
      </tr>
      <tr>
        <td>${student.exam5Mar[3]}</td>
        <td>${student.exam5Mar[4]}</td>
      </tr>
      <tr>
        <td>${student.exam5Mar[5]}</td>
        <td>${student.exam5Mar[6]}</td>
      </tr>
      <tr>
        <td>${student.exam5Mar[7]}</td>
        <td>${student.exam5Mar[8]}</td>
      </tr>
      <tr>
        <th colspan="3">Прослушивание-допуск (апрель)</th>
      </tr>
      <tr>
        <td>${student.exam5Apr[1]}</td>
        <td>${student.exam5Apr[2]}</td>
        <td rowspan="4" class="grades">${student.exam5Apr[0]}</td>
      </tr>
      <tr>
        <td>${student.exam5Apr[3]}</td>
        <td>${student.exam5Apr[4]}</td>
      </tr>
      <tr>
        <td>${student.exam5Apr[5]}</td>
        <td>${student.exam5Apr[6]}</td>
      </tr>
      <tr>
        <td>${student.exam5Apr[7]}</td>
        <td>${student.exam5Apr[8]}</td>
      </tr>
      <tr>
        <th colspan="3">Гос. экзамен (июнь)</th>
      </tr>
      <tr>
        <td>${student.exam5Jun[1]}</td>
        <td>${student.exam5Jun[2]}</td>
        <td rowspan="4" class="grades">${student.exam5Jun[0]}</td>
      </tr>
      <tr>
        <td>${student.exam5Jun[3]}</td>
        <td>${student.exam5Jun[4]}</td>
      </tr>
      <tr>
        <td>${student.exam5Jun[5]}</td>
        <td>${student.exam5Jun[6]}</td>
      </tr>
      <tr>
        <td>${student.exam5Jun[7]}</td>
        <td>${student.exam5Jun[8]}</td>
      </tr>
    </table>

    <!-- FINAL EXAMS GRADES-->

    <table class="exams-table">
      <caption class="class">ГОС. ЭКЗАМЕНЫ (май-июнь)</caption>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[25]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[25]}</td>
      </tr>
      <tr>
        <td>Муз Литература</td>
        <td>${student.mmlGrades[20]}</td>
      </tr>
      <tr>
        <td>Каз Муз Лит</td>
        <td>${student.kmlGrades[15]}</td>
      </tr>
    </table>

  </section>

  <!-- GRADES TABLE -->
  <section class="grades-table-section" id="grades-table-section">
    <h3 class="grades-table-title">Табель успеваемости</h3>

    <!-- 1 CLASS -->

    <table class="grades-table">
      <caption class="class-year">1 класс</caption>
      <tr>
        <th>Предмет</th>
        <th>I</th>
        <th>II</th>
        <th>III</th>
        <th>IV</th>
        <th>Год</th>
      </tr>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[0]}</td>
        <td>${student.guitGrades[1]}</td>
        <td>${student.guitGrades[2]}</td>
        <td>${student.guitGrades[3]}</td>
        <td>${student.guitGrades[4]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[0]}</td>
        <td>${student.solfGrades[1]}</td>
        <td>${student.solfGrades[2]}</td>
        <td>${student.solfGrades[3]}</td>
        <td>${student.solfGrades[4]}</td>
      </tr>
      <tr>
        <td>Хор</td>
        <td>${student.choirGrades[0]}</td>
        <td>${student.choirGrades[1]}</td>
        <td>${student.choirGrades[2]}</td>
        <td>${student.choirGrades[3]}</td>
        <td>${student.choirGrades[4]}</td>
      </tr>
    </table>

    <!-- 2 CLASS -->

    <table class="grades-table">
      <caption class="class-year">2 класс</caption>
      <tr>
        <th>Предмет</th>
        <th>I</th>
        <th>II</th>
        <th>III</th>
        <th>IV</th>
        <th>Год</th>
      </tr>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[5]}</td>
        <td>${student.guitGrades[6]}</td>
        <td>${student.guitGrades[7]}</td>
        <td>${student.guitGrades[8]}</td>
        <td>${student.guitGrades[9]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[5]}</td>
        <td>${student.solfGrades[6]}</td>
        <td>${student.solfGrades[7]}</td>
        <td>${student.solfGrades[8]}</td>
        <td>${student.solfGrades[9]}</td>
      </tr>
      <tr>
        <td>Муз Литература</td>
        <td>${student.mmlGrades[0]}</td>
        <td>${student.mmlGrades[1]}</td>
        <td>${student.mmlGrades[2]}</td>
        <td>${student.mmlGrades[3]}</td>
        <td>${student.mmlGrades[4]}</td>
      </tr>
      <tr>
        <td>Хор</td>
        <td>${student.choirGrades[5]}</td>
        <td>${student.choirGrades[6]}</td>
        <td>${student.choirGrades[7]}</td>
        <td>${student.choirGrades[8]}</td>
        <td>${student.choirGrades[9]}</td>
      </tr>
    </table>

    <!-- 3 CLASS -->

    <table class="grades-table">
      <caption class="class-year">3 класс</caption>
      <tr>
        <th>Предмет</th>
        <th>I</th>
        <th>II</th>
        <th>III</th>
        <th>IV</th>
        <th>Год</th>
      </tr>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[10]}</td>
        <td>${student.guitGrades[11]}</td>
        <td>${student.guitGrades[12]}</td>
        <td>${student.guitGrades[13]}</td>
        <td>${student.guitGrades[14]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[10]}</td>
        <td>${student.solfGrades[11]}</td>
        <td>${student.solfGrades[12]}</td>
        <td>${student.solfGrades[13]}</td>
        <td>${student.solfGrades[14]}</td>
      </tr>
      <tr>
        <td>Муз Литература</td>
        <td>${student.mmlGrades[5]}</td>
        <td>${student.mmlGrades[6]}</td>
        <td>${student.mmlGrades[7]}</td>
        <td>${student.mmlGrades[8]}</td>
        <td>${student.mmlGrades[9]}</td>
      </tr>
      <tr>
        <td>Каз Муз Лит</td>
        <td>${student.kmlGrades[0]}</td>
        <td>${student.kmlGrades[1]}</td>
        <td>${student.kmlGrades[2]}</td>
        <td>${student.kmlGrades[3]}</td>
        <td>${student.kmlGrades[4]}</td>
      </tr>
      <tr>
        <td>Хор</td>
        <td>${student.choirGrades[10]}</td>
        <td>${student.choirGrades[11]}</td>
        <td>${student.choirGrades[12]}</td>
        <td>${student.choirGrades[13]}</td>
        <td>${student.choirGrades[14]}</td>
      </tr>
    </table>

    <!-- 4 CLASS -->

    <table class="grades-table">
      <caption class="class-year">4 класс</caption>
      <tr>
        <th>Предмет</th>
        <th>I</th>
        <th>II</th>
        <th>III</th>
        <th>IV</th>
        <th>Год</th>
      </tr>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[15]}</td>
        <td>${student.guitGrades[16]}</td>
        <td>${student.guitGrades[17]}</td>
        <td>${student.guitGrades[18]}</td>
        <td>${student.guitGrades[19]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[15]}</td>
        <td>${student.solfGrades[16]}</td>
        <td>${student.solfGrades[17]}</td>
        <td>${student.solfGrades[18]}</td>
        <td>${student.solfGrades[19]}</td>
      </tr>
      <tr>
        <td>Муз Литература</td>
        <td>${student.mmlGrades[10]}</td>
        <td>${student.mmlGrades[11]}</td>
        <td>${student.mmlGrades[12]}</td>
        <td>${student.mmlGrades[13]}</td>
        <td>${student.mmlGrades[14]}</td>
      </tr>
      <tr>
        <td>Каз Муз Лит</td>
        <td>${student.kmlGrades[5]}</td>
        <td>${student.kmlGrades[6]}</td>
        <td>${student.kmlGrades[7]}</td>
        <td>${student.kmlGrades[8]}</td>
        <td>${student.kmlGrades[9]}</td>
      </tr>
      <tr>
        <td>Хор</td>
        <td>${student.choirGrades[15]}</td>
        <td>${student.choirGrades[16]}</td>
        <td>${student.choirGrades[17]}</td>
        <td>${student.choirGrades[18]}</td>
        <td>${student.choirGrades[19]}</td>
      </tr>
    </table>

    <!-- 5 CLASS -->

    <table class="grades-table">
      <caption class="class-year">5 класс</caption>
      <tr>
        <th>Предмет</th>
        <th>I</th>
        <th>II</th>
        <th>III</th>
        <th>IV</th>
        <th>Год</th>
      </tr>
      <tr>
        <td>Гитара</td>
        <td>${student.guitGrades[20]}</td>
        <td>${student.guitGrades[21]}</td>
        <td>${student.guitGrades[22]}</td>
        <td>${student.guitGrades[23]}</td>
        <td>${student.guitGrades[24]}</td>
      </tr>
      <tr>
        <td>Сольфеджио</td>
        <td>${student.solfGrades[20]}</td>
        <td>${student.solfGrades[21]}</td>
        <td>${student.solfGrades[22]}</td>
        <td>${student.solfGrades[23]}</td>
        <td>${student.solfGrades[24]}</td>
      </tr>
      <tr>
        <td>Муз Литература</td>
        <td>${student.mmlGrades[15]}</td>
        <td>${student.mmlGrades[16]}</td>
        <td>${student.mmlGrades[17]}</td>
        <td>${student.mmlGrades[18]}</td>
        <td>${student.mmlGrades[19]}</td>
      </tr>
      <tr>
        <td>Каз Муз Лит</td>
        <td>${student.kmlGrades[10]}</td>
        <td>${student.kmlGrades[11]}</td>
        <td>${student.kmlGrades[12]}</td>
        <td>${student.kmlGrades[13]}</td>
        <td>${student.kmlGrades[14]}</td>
      </tr>
      <tr>
        <td>Хор</td>
        <td>${student.choirGrades[20]}</td>
        <td>${student.choirGrades[21]}</td>
        <td>${student.choirGrades[22]}</td>
        <td>${student.choirGrades[23]}</td>
        <td>${student.choirGrades[24]}</td>
      </tr>
    </table>

  </section>

  <section class="solfeggio-section" id="solfeggio-section">
      <h3>Сольфеджио</h3>
      <fieldset>
        <legend>Звук и ритм</legend>
        <input type="checkbox" id="sound-rythm1">
        <label for="sound-rythm1"> Названия нот и октав на клавиатуре</label><br>
        <input type="checkbox" id="sound-rythm2">
        <label for="sound-rythm2"> Расположение нот на нотоносце</label><br>
        <input type="checkbox" id="sound-rythm3">
        <label for="sound-rythm3"> Длительности нот</label><br>
        <input type="checkbox" id="sound-rythm4">
        <label for="sound-rythm4"> Читка ритма с листа со счетом вслух</label><br>
        <input type="checkbox" id="sound-rythm5">
        <label for="sound-rythm5"> Сольмизация</label><br>
      </fieldset>
      <fieldset>
        <legend>Интервалы</legend>
        <input type="checkbox" id="intervals1">
        <label for="intervals1"> Названия (полные и короткие)</label><br>
        <input type="checkbox" id="intervals2">
        <label for="intervals2"> Величины (ступеневые и тоновые)</label><br>
        <input type="checkbox" id="intervals3">
        <label for="intervals3"> Умение строить любой интервал от заданной ноты вверх и вниз</label><br>
      </fieldset>
      <fieldset>
        <legend>Трезвучия</legend>
        <input type="checkbox" id="triads1">
        <label for="triads1"> Виды трезвучий и их строение</label><br>
        <input type="checkbox" id="triads2">
        <label for="triads2"> Умение строить любое трезвучие от заданной ноты вверх и вниз</label><br>
        <input type="checkbox" id="triads3">
        <label for="triads3"> Обращения</label><br>
        <input type="checkbox" id="triads4">
        <label for="triads4"> Буквенное обозначение аккордов</label><br>
      </fieldset>
      <fieldset>
        <legend>Тональности</legend>
        <input type="checkbox" id="tonalities1">
        <label for="tonalities1"> Умение определять количество знаков в диезных тональностях</label><br>
        <input type="checkbox" id="tonalities2">
        <label for="tonalities2"> Умение определять количество знаков в бемольных тональностях</label><br>
        <input type="checkbox" id="tonalities3">
        <label for="tonalities3"> Умение определять диезные тональности по количеству знаков при ключе</label><br>
        <input type="checkbox" id="tonalities4">
        <label for="tonalities4"> Умение определять бемольные тональности по количеству знаков при ключе</label><br>
      </fieldset>
      <fieldset>
        <legend>Лады</legend>
        <input type="checkbox" id="modes1">
        <label for="modes1"> Строение мажорного лада</label><br>
        <input type="checkbox" id="modes2">
        <label for="modes2"> 3 вида минора</label><br>
        <input type="checkbox" id="modes3">
        <label for="modes3"> Народные лады</label><br>
      </fieldset>
      <fieldset>
        <legend>D7</legend>
        <input type="checkbox" id="D7-1">
        <label for="D7-1"> D7 и его обращения</label><br>
        <input type="checkbox" id="D7-2">
        <label for="D7-2"> Строение D7 и его обращений</label><br>
        <input type="checkbox" id="D7-3">
        <label for="D7-3"> Умение разрешать D7 и его обращения</label><br>
        <input type="checkbox" id="D7-4">
        <label for="D7-4"> Умение строить и разрешать D7 и его обращения в любой тональности</label><br>
      </fieldset>
      <fieldset>
        <legend>Функции</legend>
        <input type="checkbox" id="functions1">
        <label for="functions1"> Главные функции лада</label><br>
        <input type="checkbox" id="functions2">
        <label for="functions2"> Умение строить TSDT в любой тональности</label><br>
      </fieldset>
    </section>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  studentsData.forEach(student => {
    const container = document.querySelector(`#${student.nameEng}`);
    if (container) {
      container.innerHTML = generateStudentContent(student);
    }
  });
});


// SOLFEGGIO SECTION

document.addEventListener("DOMContentLoaded", function () {
  const studentId = window.location.pathname.split("/").pop(); // уникальный ID ученика
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  // Загружаем прогресс из localStorage
  const savedProgress = JSON.parse(localStorage.getItem(studentId) || "{}");

  // Отмечаем чекбоксы, которые были сохранены
  checkboxes.forEach((checkbox) => {
    checkbox.checked = savedProgress[checkbox.id] || false;
    checkbox.addEventListener("change", () => {
      savedProgress[checkbox.id] = checkbox.checked;
      localStorage.setItem(studentId, JSON.stringify(savedProgress));
    });
  });
});
