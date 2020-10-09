import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Suggest from "@/components/Suggest";
import City from "@/components/City";
import Sos from "@/components/Sos";
import Logon from "@/components/Logon";
import Lines from "@/components/Lines";
import Place from "@/components/Place";
import Service from "@/components/Service";
import All from "@/components/All";
import AllCity from "@/components/AllCity";
import SanYa from "@/components/SanYa";
import BeiJing from "@/components/BeiJing";
import ChanPin from "@/components/ChanPin";
import Select from "@/components/Select";
import Null from "@/components/Null";
import Query from "@/components/Query";
import Help from "@/components/Help";
import Serve from "@/components/Serve";
import FeedBack from "@/components/FeedBack";
import Around from "@/components/Around";
import ToCity from "@/components/ToCity";
import KanDian from "@/components/KanDian";
import Train from "@/components/Train";
import UserName from "@/components/UserName";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/Suggest",
      name: "Suggest",
      component: Suggest
    },
    {
      path: "/City",
      name: "City",
      component: City
    },
    {
      path: "/Sos",
      name: "Sos",
      component: Sos,
      children: [
        {
          path: "/Sos/Lines",
          name: "Lines",
          component: Lines
        },
        {
          path: "/Sos/Place",
          name: "Place",
          component: Place
        },
        {
          path: "/Sos/Service",
          name: "Service",
          component: Service
        }
      ],
      redirect: "/Sos/Lines"
    },
    {
      path: "/Logon",
      name: "Logon",
      component: Logon
    },
    {
      path: "/All",
      name: "All",
      component: All
    },
    {
      path: "/AllCity",
      name: "AllCity",
      component: AllCity
    },
    {
      path: "/SanYa",
      name: "SanYa",
      component: SanYa
    },
    {
      path: "/BeiJing",
      name: "BeiJing",
      component: BeiJing
    },
    {
      path: "/ChanPin",
      name: "ChanPin",
      component: ChanPin
    },
    {
      path: "/Select",
      name: "Select",
      component: Select
    },
    {
      path: "/Null",
      name: "Null",
      component: Null
    },
    {
      path: "/Query",
      name: "Query",
      component: Query
    },
    {
      path: "/Help",
      name: "Help",
      component: Help
    },
    {
      path: "/Serve",
      name: "Serve",
      component: Serve
    },
    {
      path: "/FeedBack",
      name: "FeedBack",
      component: FeedBack
    },
    {
      path: "/Around",
      name: "Around",
      component: Around
    },
    {
      path: "/ToCity",
      name: "ToCity",
      component: ToCity
    },
    {
      path: "/KanDian",
      name: "KanDian",
      component: KanDian
    },
    {
      path: "/Train",
      name: "Train",
      component: Train
    },
    {
      path: "/UserName",
      name: "UserName",
      component: UserName
    }
  ],
  scrollBehavior(to, from, savedposition) {
    return {
      x: 0,
      y: 0
    };
  }
});
