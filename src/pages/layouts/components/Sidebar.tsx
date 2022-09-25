import React from "react";
import classNames from "classnames";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { info } from "../../../config";
import useRequest from "../../../hooks/useRequest";
import { githubUser } from "../../blog/api/user";

export default function Sidebar() {
  const { data } = useRequest({
    refetch: () => githubUser.getUser(),
  });
  return (
    <aside className="sidebar">
      <div className="sticky-column">
        <div className="avatar-wrap">
          <svg className="avatar avatar--180" viewBox="0 0 188 188">
            <g className="avatar__box">
              <image xlinkHref={data?.avatar_url} height="100%" width="100%" />
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="title sidebar__user-name">
            <span className="weight--500">{info.firstName}</span>{" "}
            {info.lastName}
          </h3>
          <div className="badge badge--gray">{info.title}</div>
          {/* Social */}
          <div className="social">
            {info.social.map((item, index: number) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={
                  <Tooltip id={`social-tooltip-${item.name}`}>
                    {item.name}
                  </Tooltip>
                }
              >
                <a
                  className="social__link"
                  target="_blank"
                  href={item.link}
                  key={index}
                  rel="noreferrer"
                >
                  <i className={item.icon} />
                </a>
              </OverlayTrigger>
            ))}
          </div>
        </div>
        <ul className="contact-block">
          {info.summary.map((item, index: number) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={
                <Tooltip id={`summary-tooltip-${item.name}`}>
                  {item.name}
                </Tooltip>
              }
            >
              <li className="contact-block__item" title={item.name}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <i className={classNames("font-icon", item.icon)} />
                    {item.value}
                  </a>
                ) : (
                  <>
                    <i className={classNames("font-icon", item.icon)} />
                    {item.value}
                  </>
                )}
              </li>
            </OverlayTrigger>
          ))}
        </ul>
        {/* <a className="btn" href={info.cv}>
          <i className="font-icon fa-solid fa-download fa-fw" /> Download CV
        </a> */}
      </div>
    </aside>
  );
}
