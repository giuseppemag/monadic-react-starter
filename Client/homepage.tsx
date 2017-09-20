import * as React from "react"
import * as ReactDOM from "react-dom"
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
import {my_page} from './my_page'

export function HomePage(slug:string) : JSX.Element {

  // let edit_toggle_route = () : Route<{}> => ({
  //   url: make_url<{}, never>(["my_page"]),
  //   page:_ => my_page
  //   })
  //   application("edit", window.location.href.replace(slug, ""), slug,
  //   () => Promise.resolve(
  //   [
  //     edit_toggle_route()
  //   ]))


  return <div>
      {
        <div className="component">
          {
            MonadicReact.simple_application(my_page, x => { console.log(`Done with ${JSON.stringify(x)}`) })
          }
        </div>
      }
  </div>
}

export let HomePage_to = (slug:string, target_element_id:string, ) => {
  (async() => {
    let res = await fetch(`/translations.json`, { method: 'get', credentials: 'include', headers:{'content-type': 'application/json'} })
    let resources = await res.json()
    i18next.init({
      lng:  "nl",
      fallbackLng: "en",
      ns: ["common","HomePage","Course","Lecture"],
      resources: resources
    }, (err, t) => {
      ReactDOM.render(
        HomePage(slug),
        document.getElementById(target_element_id)
      )
    })
  })()
}
