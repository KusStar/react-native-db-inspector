package com.dbinspector

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.infinum.dbinspector.DbInspector

class DbInspectorModule internal constructor(context: ReactApplicationContext) :
  ReactContextBaseJavaModule(context) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun show() {
    DbInspector.show()
  }

  companion object {
    const val NAME = "DbInspector"
  }
}
