import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { axios } from "../../../libs/axios";

export default function DetailPage() {
  const { id }: any = useParams();
  const [movie, setMovie]: any = useState({
    poster_path: "",
    title: "",
    release_date: "",
  });

  useEffect(() => {
    axios.get(`/movie/${id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, [id]);

  return (
    <Container
      src={`https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${movie.poster_path}`}
    >
      <div className="background-blur">
        <div className="image_content">
          <img
            className="poster lazyload lazyloaded"
            src={`https://www.themoviedb.org//t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="description">
          <div className="title">
            <h2 className="name">
              <a href="/movie/507086-jurassic-world-dominion">{movie.title}</a>
              <span className="tag release_date">({movie.release_date})</span>
            </h2>

            <div className="facts">
              <span className="certification">PG-13</span>

              <span className="release">06/10/2022 (US)</span>

              <span className="genres">
                <a href="/genre/28-phim-hanh-d-ng/movie">Phim Hành Động</a>
                ,&nbsp;
                <a href="/genre/12-phim-phieu-l-u/movie">Phim Phiêu Lưu</a>
                ,&nbsp;
                <a href="/genre/878-phim-khoa-h-c-vi-n-t-ng/movie">
                  Phim Khoa Học Viễn Tưởng
                </a>
              </span>

              <span className="runtime">2h 27m</span>
            </div>

            <p>Overview</p>
            <p>
              Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con
              khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài
              người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy
              không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm
              chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long
              mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không
              đi một mình mà còn đem theo một chú khủng long con khác. Điều này
              khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn.
              Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một
              kỷ nguyên mà khủng long và con người sống chung một cách hòa bình?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div<{
  src?: string;
}>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ src }) =>
    src &&
    `
      background-image: url(${src});
    `}
  .background-blur {
    display: flex;
    height: inherit;
    justify-content: start;
    flex-wrap: wrap;
    background-image: linear-gradient(
      to right,
      rgba(31.5, 10.5, 10.5, 1) 150px,
      rgba(31.5, 10.5, 10.5, 0.84) 100%
    );
    box-sizing: border-box;
    padding: 3rem 0 0 3rem;
  }
  .description {
    padding-left: 2.5rem;
    display: flex;
    box-sizing: border-box;
    color: #fff;
    .title {
      .name {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 2.2rem;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
      .facts {
        display: flex;
        align-items: center;
        .certification {
          display: inline-flex;
          white-space: nowrap;
          align-items: center;
          align-content: center;
          padding: 0.06em 4px 0.15em 4px !important;
          line-height: 1;
          border-radius: 2px;
          margin-right: 7px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: rgba(255, 255, 255, 0.6);
        }
        .release {
          padding-left: 0;
        }
        .genres {
          padding-left: 20px;
          display: flex;
          align-items: center;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
        .runtime {
          padding-left: 20px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
