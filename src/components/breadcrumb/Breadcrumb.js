import React from 'react';
import { breadcrumbConfig } from './constants/breadcrum.general.js';
import './breadcrumb.css';
function Breadcrumb() {
  function renderBreadcrumb() {
    return breadcrumbConfig.map((item, index) => {
      if (item.isLink) {
        return (
          <a href='/' key={index}>
            <span className='lightWeightText'>{item.label} / </span>
          </a>
        );
      }
      return <span key={index}>Kitchens Of Punjab</span>;
    });
  }

  return <section className='breadcrumb'>{renderBreadcrumb()}</section>;
}

export default Breadcrumb;
