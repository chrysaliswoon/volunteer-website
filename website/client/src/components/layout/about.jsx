import React from "react";

export default function AboutSection() {
  return (
    <div>
      <div className="lg:w-10/12 w-full">
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Bringing youths together to create fun, engaging and meaningful
          programs for our community.
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          As of it's founding, the Zhenghua Youth Network (ZHYN) has been
          reaching out to youths in Singapore from the ages of 12 to 35 since
          it's inception. Over the years, ZHYN has been offering a wide spectrum
          of interesting and meaningful programmes and initiatives to excite,
          engage and and empower the youths in creating a vibrant youth
          community.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://scontent.fsin5-1.fna.fbcdn.net/v/t39.30808-6/283964806_5497993023557988_5865717851135799548_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=24p8s0Q12g0AX-D63g5&_nc_ht=scontent.fsin5-1.fna&oh=00_AT-UbpCqTt0jJEQGFjZruRKmEH2C_652LTjArAXNvuyCmQ&oe=629CD499"
          alt="ZHYN Committee Members"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://scontent.fsin5-1.fna.fbcdn.net/v/t39.30808-6/283964806_5497993023557988_5865717851135799548_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=24p8s0Q12g0AX-D63g5&_nc_ht=scontent.fsin5-1.fna&oh=00_AT-UbpCqTt0jJEQGFjZruRKmEH2C_652LTjArAXNvuyCmQ&oe=629CD499"
          alt="ZHYN Committee Members"
        />
        <img
          className="sm:hidden block w-full"
          src="https://scontent.fsin5-1.fna.fbcdn.net/v/t39.30808-6/283964806_5497993023557988_5865717851135799548_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=24p8s0Q12g0AX-D63g5&_nc_ht=scontent.fsin5-1.fna&oh=00_AT-UbpCqTt0jJEQGFjZruRKmEH2C_652LTjArAXNvuyCmQ&oe=629CD499"
          alt="ZHYN Committee Members"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Quam id leo in vitae. Nascetur ridiculus mus mauris vitae ultricies
            leo integer. A lacus vestibulum sed arcu. Imperdiet massa tincidunt
            nunc pulvinar sapien et ligula ullamcorper malesuada. A diam
            sollicitudin tempor id eu. Eu sem integer vitae justo eget magna. Et
            malesuada fames ac turpis egestas sed. Ac turpis egestas integer
            eget aliquet nibh praesent. 
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZhenghuaYN%2Fvideos%2F2066007260084537%2F&show_text=false&width=560&t=0"
            className="lg:block hidden w-full"
            width="560"
            height="314"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZhenghuaYN%2Fvideos%2F2066007260084537%2F&show_text=false&width=560&t=0"
            className="lg:hidden sm:block hidden w-full h-3/4"
            width="560"
            height="314"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FZhenghuaYN%2Fvideos%2F2066007260084537%2F&show_text=false&width=560&t=0"
            className="sm:hidden block w-full"
            width="560"
            height="314"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
