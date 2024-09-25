import Image from "next/image";

const APlayers = [
  {
    firstName: "Jenerey",
    lastName: "Añover",
    ign: "javan",
    role: "",
    captain: true,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/jenerey-anover.webp",
  },
  {
    firstName: "Lyser",
    lastName: "Gagarin",
    ign: "+ris+an*",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/lyser-1529649990.webp",
  },
  {
    firstName: "Gilbert",
    lastName: "Campo",
    ign: "gl ez gg",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/gilbert-campo-1618463439.webp",
  },
  {
    firstName: "Kurt",
    lastName: "Obispo",
    ign: "utot@384",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/kurt-obispo.webp",
  },
  {
    firstName: "Rex",
    lastName: "Olis",
    ign: "Oliswell",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/rex-olis.webp",
  },
  {
    firstName: "Getty",
    lastName: "Ripalda",
    ign: "getty images",
    role: "",
    captain: false,
    pic: "https://ca.slack-edge.com/T02CB8TPD-U04D5D94N7K-61443567ea36-512",
  },
];

const BPlayers = [
  {
    firstName: "Jezi",
    lastName: "Tobio",
    ign: "",
    role: "",
    captain: true,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/jessie2.webp",
  },
  {
    firstName: "Abigail",
    lastName: "Anas",
    ign: "Yufemiya",
    role: "",
    captain: false,
    pic: "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-1/279366597_7657019064338302_3097267342907320110_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF3qq2bhLuRvWdZX38BDc0DVFiFKkctxxJUWIUqRy3HEoj33XJZwfBhVpM0I2gQyYE&_nc_ohc=iPK_QkSdNdEQ7kNvgFu2gOx&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=Am4ttToRlGrRyfjdq0Hyp4k&oh=00_AYDO3JAqs4YlgtL1S1J7T86ONahldOIRy7KIFHdi8H3eig&oe=66F9E065",
  },
  {
    firstName: "Carlo",
    lastName: "Encomio",
    ign: "iskibidi",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/carlo2.webp",
  },
  {
    firstName: "Jann",
    lastName: "Horca",
    ign: "Ayaw_Siton_Ga",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/jv-horca.webp",
  },
  {
    firstName: "Chino",
    lastName: "Young",
    ign: "Valfreya",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/eduardo-young-jr-1472017221.webp",
  },
  {
    firstName: "Jason",
    lastName: "Gaje",
    ign: "ShogunLee",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/jason.webp",
  },
  {
    firstName: "Mariam",
    lastName: "Cañanes",
    ign: "Syrinx_13",
    role: "",
    captain: false,
    pic: "https://ca.slack-edge.com/T02CB8TPD-U06TPR8J3PF-a4df60bd7c24-512",
  },
];

const CPlayers = [
  {
    firstName: "Ivan",
    lastName: "Escalo",
    ign: "Cho Yae",
    role: "",
    captain: true,
    pic: "https://ca.slack-edge.com/T02CB8TPD-U04D5D8V5PB-162557b26e5c-512",
  },
  {
    firstName: "John",
    lastName: "Shmurnas",
    role: "Acebedo",
    captain: false,
    pic: "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-1/273271079_683711126138120_6577665735586367369_n.jpg?stp=c1.39.198.198a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF7HkL3uXXYwL3yDv9yA_RxGF1B_A_Dm-IYXUH8D8Ob4pws4QPa7s-kwvXQa5xHrPk&_nc_ohc=S-iMy7dz2kUQ7kNvgH5xALM&_nc_ht=scontent.fmnl8-6.fna&oh=00_AYAbdOTCuYwSPkE7GAGMXK62FHockX_fIIzSUsFBdabXyw&oe=66F9EAAD",
  },
  {
    firstName: "Ian",
    lastName: "Delgado",
    ign: "Yntt",
    role: "",
    captain: false,
    pic: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/429959388_10159434972817102_1419357099043840369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvsT0VA-WLie-fQZCTPmyKIpFaRZvr9EAikVpFm-v0QKNNGcbkvV3n0TRXWES0aL8&_nc_ohc=moE2MNkPqSYQ7kNvgEBzRZm&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AgG3f55VbjZB8s1TayqbAUm&oh=00_AYAMZOgqyICEUGfdtBdlqGPQjpA0pqRIF667q4FSYaoONA&oe=66F9F8BD",
  },
  {
    firstName: "Rose",
    lastName: "Padernos",
    ign: "Rosa",
    role: "",
    captain: false,
    pic: "https://ca.slack-edge.com/T02CB8TPD-U04GGHA3KFB-26c7f497e84c-512",
  },
  {
    firstName: "Fred",
    lastName: "Baltazar",
    ign: "FCKX.",
    role: "",
    captain: false,
    pic: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-1/411782836_10224883259939372_2733656471925465241_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHq-Jyr0-QtlI0WIBJzdF1IQdMgGNBQuk5B0yAY0FC6TiBNKXL81EMWeg6x07junGU&_nc_ohc=6vHkmEspRuYQ7kNvgGLrJRY&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=AuLitzYjBni2oCIcK_LcUtB&oh=00_AYDpL_-fqt_qnOt7Mz1huVM27dGH--yFhVmUtGTBRn6HbA&oe=66F9EE24",
  },
  {
    firstName: "Erick",
    lastName: "Carbona",
    ign: "Puppy Miracle",
    role: "",
    captain: false,
    pic: "https://scontent.fmnl8-4.fna.fbcdn.net/v/t1.6435-1/126051115_2910067219215122_2033905802452059783_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeGjZ4WaZm_6VE7AIaHMSQREpb-rL4cu5Ialv6svhy7kht6B-l1Gbg5HiXO-1f8tPrg&_nc_ohc=MqhCQdF0QMkQ7kNvgFLKbdk&_nc_ht=scontent.fmnl8-4.fna&oh=00_AYAKRCg2A1mM_Bh5yPysAWoTcNvEL6fy0nrY57w6QultgQ&oe=671B82FD",
  },
  {
    firstName: "Lorraine",
    lastName: "Suralta",
    ign: "Lorracious",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/hover/loraine-1529650423.webp",
  },
];

export default function Players() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <h2 className="font-bold uppercase text-[80px] leading-[70px]">Teams</h2>

      <div className="grid grid-cols-3">
        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">Team Javan</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {APlayers.map(function (player, index) {
              return (
                <div className="flex bg-slate-700 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">Team Jezi</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {BPlayers.map(function (player, index) {
              return (
                <div className="flex bg-amber-500 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">Team Ivan</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {CPlayers.map(function (player, index) {
              return (
                <div className="flex bg-cyan-900 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
