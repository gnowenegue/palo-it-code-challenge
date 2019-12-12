import React, { useContext } from 'react';
import Link from 'next/link';

import AppContext from '../contexts/AppContext';

import Severity from './Severity';

const Severities = () => {
  const { setSeverity, illness, severity } = useContext(AppContext);

  const emoticons = ['🤤', '🥴', '🤢', '🤮', '👿'];

  return (
    <div id="severity" className="modal">
      <div className="modal-content">
        <h5 className="center-align">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          How severe is your <i className="red-text">{illness.name}</i>?
        </h5>
        <div className="row">
          {emoticons.map((e, i) => {
            return (
              <Severity
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                id={i + 1}
                emoticon={e}
                setSeverity={setSeverity}
              />
            );
          })}
        </div>
      </div>
      <div className="modal-footer center-align">
        <Link
          href={`/hospitals?severity=${severity}`}
          // as={`/hospitals/${severity}`}
        >
          <a
            href="#!"
            className="waves-effect waves-red modal-close btn disabled"
          >
            Which hospitals?
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .modal .modal-content h5 {
            margin-bottom: 24px;
          }
          .modal .modal-content .row {
            margin-bottom: 0;
          }
          .modal .modal-footer {
            padding-bottom: 24px;
            height: auto;
          }
          .modal .modal-footer.center-align {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Severities;
