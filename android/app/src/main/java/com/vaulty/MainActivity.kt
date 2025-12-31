package com.vaulty

import android.os.Build
import android.os.Bundle
import androidx.core.view.WindowCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
// import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "vaulty"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    // RNBootSplash.init(this, R.style.BootTheme) // Initialize RNBootSplash
    super.onCreate(savedInstanceState)
    
    // Enable edge-to-edge display
    setupEdgeToEdge()
  }

  private fun setupEdgeToEdge() {
    // Enable edge-to-edge mode
    WindowCompat.setDecorFitsSystemWindows(window, false)
    
    // For Android 15+ (API 35+), enable edge-to-edge enforcement
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.VANILLA_ICE_CREAM) {
      window.decorView.setOnApplyWindowInsetsListener(null)
    }
  }
}
