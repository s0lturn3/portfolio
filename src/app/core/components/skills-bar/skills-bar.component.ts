import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'skills-bar',
  standalone: true,
  imports: [ ],
  templateUrl: './skills-bar.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";

    .skills-bar {
      .scroll {
        position: relative;
        display: flex;
        width: 65%;
        overflow: hidden;
        
        -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)
      }

      .scroll div {
        white-space: nowrap;
        animation: first-scroll var(--time) linear infinite;
        animation-delay: calc(var(--time)*-1);
      }

      .scroll div:nth-child(2) {
        animation: second-scroll var(--time) linear infinite;
        animation-delay: calc(var(--time)/-2);
      }


      .scroll div span {
        display: inline-flex;
        margin: 10px;
        letter-spacing: 0.2em;
        background: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        transition: 0.5s;
      }

      .scroll div span:hover {
        background: var(--primary-500);
        cursor: pointer;
      }
    }
  `
})
export class SkillsBarComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  frontendList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Angular",
    "SCSS",
    "TypeScript",
    "NPM",
    "UI/UX"
  ];

  backendList = [
    "C#",
    ".NET Framework",
    "SQL Server",
    "MySQL",
    "REST APIs"
  ];

  toolsList = [
    "Git",
    "GitHub Actions",
    "Azure DevOps",
    "CI/CD",
    "Unit Tests",
    "E2E",
    "Jasmine & Karma",
    "Cypress",
    "PowerBI",
    "Figma"
  ];
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========

}
