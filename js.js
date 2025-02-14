.upcoming {
  padding-top: 32px;
}

.upcoming__film-details {
  display: flex;
  gap: 58px;
}
.upcoming__film-rateing {
  display: flex;
  gap: 5px;
}
.upcoming-header-one {
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  color: var(--white);
  margin-top: 32px;
  margin-bottom: 24px;
}
.upcoming-header-two {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 24px;
  margin-bottom: 7px;
}
.upcoming-p {
  font-weight: 500;
  font-size: 16px;
  color: var(--grey);
  padding-top: 12px;
}
.upcoming-header-three {
  font-weight: 500;
  font-size: 16px;
  color: var(--grey);
  margin-top: 20px;
  margin-bottom: 16px;
}
.upcoming-p-three {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--secondary-text-grey);
  margin-bottom: 40px;
}
.upcoming-p-two {
  color: var(--orange);
}
.upcoming-box {
  border-radius: 5px;
  padding: 1px 4px;
  width: 40px;
  height: 18px;
  background: var(--white);
  color: var(--background);
}
.upcoming-image {
  border-radius: 5px;
  width: 280px;
  height: 402px;
  display: block;
  object-fit: cover;
}
.upcoming__film-box {
  display: flex;
  flex-wrap: wrap;
}
.upcoming-p-style {
  padding-top: 12px;
}

@media (min-width: 768px) {
  .upcoming {
    padding-top: 44px;
  }
  .upcoming-image {
    width: 704px;
    height: 400px;
  }
  .upcoming-header-one {
    font-size: 24px;
  }
  .upcoming-header-two {
    font-size: 28px;
  }

  .upcoming-div {
    display: flex;
  }
  .btn-space {
    max-height: 40px;
    font-size: 16px;
    line-height: 1;
  }
  .upcoming-p-three {
    margin-bottom: 20px;
    max-height: 160px;
  }
  .btn-space {
    max-height: 40px;
    font-size: 16px;
    line-height: 1;
  }
  .upcoming-p-three {
    margin-bottom: 20px;
    max-height: 160px;
  }
}
@media (min-width: 1280px) {
  .upcoming {
    padding-top: 60px;
  }
  .upcoming-header-one {
    margin-bottom: 28px;
    font-size: 28px;
  }
  .upcoming__film-box {
    flex-wrap: nowrap;
  }
  .upcoming-image {
    height: 458px;
    width: 805px;
  }
  .upcoming-image {
    margin-right: 16px;
  }
  .upcoming-header-two {
    font-size: 32px;
    margin-bottom: 28px;
    margin-top: 0;
  }
  .upcoming-header-three {
    margin-top: 20px;
  }

  .upcoming-film-box {
    flex-wrap: nowrap;
  }
}
