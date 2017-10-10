import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Untyped from "./untyped"
import * as Typed from "./typed"
import {List, Map, Set, Range} from "immutable"
import * as Immutable from "immutable"
import * as Moment from 'moment'
import * as i18next from 'i18next'

import {UrlTemplate, application, get_context, Route, Url, make_url, fallback_url, link_to_route,
Option, C, Mode, unit, bind, string, number, bool, button, selector, multi_selector, label, h1, h2, div, form, image, link, file, overlay,
custom, repeat, all, any, lift_promise, retract, delay,
simple_menu, mk_menu_entry, mk_submenu_entry, MenuEntry, MenuEntryValue, MenuEntrySubMenu,
rich_text, paginate, Page, list, editable_list} from 'monadic_react'

import * as MonadicReact from 'monadic_react'
import {monadic} from './monadic'

export function HomePage(slug:string) : JSX.Element {
  return <div>
        <div className="left" style={ {position:"absolute", left:"0%", top:"0px", width:"33%"} }>
          <h2>Dynamically typed:</h2>
          <Untyped.Sample />
        </div>
        <div className="left" style={ {position:"absolute", left:"33%", top:"0px", width:"34%"} }>
          <h2>Statically typed:</h2>
          <Typed.Sample />
        </div>
        <div className="left" style={ {position:"absolute", left:"67%", top:"0px", width:"33%"} }>
          <h2>Monadic:</h2>
          { MonadicReact.simple_application(monadic, x => { console.log(`The component notifies ${JSON.stringify(x)}`) }) }
        </div>
      </div>
}

export let HomePage_to = (slug:string, target_element_id:string, ) => {
  ReactDOM.render(
    HomePage(slug),
    document.getElementById(target_element_id)
  )
}
