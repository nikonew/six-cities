import { Link } from 'react-router-dom';
import { MAX_RATING } from '../../const';
import { TOffer } from '../../types/types';
import { getRatingStars, scrollToTop } from '../../util';
import { AppRoute } from '../../app/router/router/router';

type NearByProps = {
    nearBy: TOffer;
}

export default function NearByOffers ({nearBy}: NearByProps): JSX.Element {

  const {isPremium, previewImage, price, isFavorite, rating,type, title, id} = nearBy;

  const bookmarksButtonClassName = `place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`;

  return (
    <article className="near-places__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link onClick={() => scrollToTop()} to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={bookmarksButtonClassName}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingStars(rating, MAX_RATING)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
