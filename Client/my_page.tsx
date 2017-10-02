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


export type Mode = "edit" | "view"
export type EditToggleState = { mode:Mode, text:string }

export type TwoStrings = { text1:string, text2:string }

export let my_page =
  // string("view", "text", "my_page")("Hello world!")

  // string("view", "text")("Hello world!").never("my page string")

  // repeat<string>("my page string repeater")(
  //   string("edit", "text", "my page string")
  // )("Hello world!")

  // repeat<string>("my page string repeater")(s =>
  //   string("edit", "text", "my page string")(s)
  //   .filter(x => x.length < 10)
  // )("Hello world!")
  // .map<string>(x => x + "!!!")

  // repeat<TwoStrings>("my page strings state")(
  //   ts => string("edit")(ts.text1).then(undefined, new_text1 =>
  //     unit<TwoStrings>({...ts, text1: new_text1})
  //   )
  // )({ text1: "Hello world", text2:"Andrea is a bit fag"})

  // repeat<TwoStrings>("my page string state")(
  //   any<TwoStrings, TwoStrings>("my page string any")([
  //     ts => string("edit", "text", "my page string 1")(ts.text1).then("text1", t1 =>
  //     unit<TwoStrings>({...ts, text1:t1})),
  //     ts => string("edit", "text", "my page string 2")(ts.text2).then("text2", t2 =>
  //     unit<TwoStrings>({...ts, text2:t2}))
  //   ])
  // )({ text1: "Hello world", text2:"Andrea is a bit fag"})

  // repeat<TwoStrings>("my page strings state")(
  //   any<TwoStrings,TwoStrings>()([
  //     retract<TwoStrings,string>("text 1")(ts => ts.text1, ts => s => ({...ts, text1:s}), string("edit")),
  //     retract<TwoStrings,string>("text 2")(ts => ts.text2, ts => s => ({...ts, text2:s}), string("edit"))
  //   ])
  // )({ text1:"Hello", text2:" world!" })

  // repeat<TwoStrings>("my page string state")(
  //   any<TwoStrings, TwoStrings>("my page string any")([
  //     retract<TwoStrings, string>("my page string 1 retract")(ts => ts.text1, ts => s => ({...ts, text1:s}),
  //         string("edit", "text", "my page string 1")),
  //     retract<TwoStrings, string>("my page string 2 retract")(ts => ts.text2, ts => s => ({...ts, text2:s}),
  //         string("edit", "text", "my page string 2"))
  //   ])
  // )({ text1: "Hello world", text2:"Andrea is a bit fag"})

  lift_promise<void, EditToggleState>(_ => Promise.resolve<EditToggleState>({ mode:"edit", text:"This comes from the big fat internet" }), "semi exponential")(null)
  .then("my page form", initial_state =>
  repeat<EditToggleState>("edit toggle sample")(
    any<EditToggleState, EditToggleState>()([
    retract<EditToggleState, Mode>()(s => s.mode, s => m => ({...s, mode:m}),
      mode => button<Mode>(`${mode == "view" ? "Edit" : "View"}`)(mode == "view" ? "edit" : "view")
    ),
    state =>
      retract<EditToggleState, string>()(s => s.text, s => t => ({...s, text:t}),
        // rich_text(state.mode)
        string(state.mode) //.filter(s => s.length < 10)
      )(state)
    ])
  )(initial_state).map(ts => ts.text, "edit toggle sample map")).then(undefined,
  delay<string>(5000)(
    s => lift_promise<string, void>(s => Promise.resolve(console.log(`Saved ${s}`)), "semi exponential")(s).ignore_with(s))
  )
