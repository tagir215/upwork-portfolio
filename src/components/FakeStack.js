import React from "react";
import './FakeStack.css'
import { useState, useRef, useEffect } from "react";

export default function(){
    const strings = [
        "E/AndroidRuntime: FATAL EXCEPTION: main",
        "Process: com.example.myapp, PID: 12345",
        "java.lang.NullPointerException",
        "    at com.example.myapp.MainActivity.onCreate(MainActivity.java:25),",
        "    at android.app.Activity.performCreate(Activity.java:7984),",
        "    at android.app.Activity.performCreate(Activity.java:7973),",
        "    at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1307),",
        "    at androidx.test.runner.MonitoringInstrumentation.callActivityOnCreate(MonitoringInstrumentation.java:697),",
        "    at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3422),",
        "    at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3601),",
        "    at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:85),",
        "    at android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:135),",
        "    at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:95),",
        "    at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2066),",
        "    at android.os.Handler.dispatchMessage(Handler.java:106),",
        "    at android.os.Looper.loop(Looper.java:223),",
        "    at android.app.ActivityThread.main(ActivityThread.java:7656),",
        "    at java.lang.reflect.Method.invoke(Native Method),",
        "    at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:592),",
        "    at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:947),",
        "    at dalvik.system.NativeStart.main(Native Method)",
        "E/AndroidRuntime: Caused by: java.lang.NullPointerException",
        "    at com.example.myapp.MyFragment.onViewCreated(MyFragment.java:63),",
        "    at androidx.fragment.app.Fragment.performViewCreated(Fragment.java:2986),",
        "    at androidx.fragment.app.FragmentStateManager.createView(FragmentStateManager.java:546),",
        "    at androidx.fragment.app.FragmentManager.moveToState(FragmentManager.java:1291),",
        "    at androidx.fragment.app.FragmentManager.moveToState(FragmentManager.java:1467),",
        "    at androidx.fragment.app.FragmentManager.moveFragmentToExpectedState(FragmentManager.java:1784),",
        "    at androidx.fragment.app.FragmentManager.moveToState(FragmentManager.java:1852),",
        "    at androidx.fragment.app.FragmentManager.dispatchStateChange(FragmentManager.java:3269),",
        "    at androidx.fragment.app.FragmentManager.dispatchViewCreated(FragmentManager.java:3200),",
        "    at androidx.fragment.app.Fragment.performViewCreated(Fragment.java:2983),",
        "    at androidx.fragment.app.FragmentStateManager.ensureInflatedView(FragmentStateManager.java:392),",
        "    at androidx.fragment.app.FragmentStateManager.moveToExpectedState(FragmentStateManager.java:282),",
        "    at androidx.fragment.app.FragmentManager.executeOpsTogether(FragmentManager.java:2189),",
        "    at androidx.fragment.app.FragmentManager.removeRedundantOperationsAndExecute(FragmentManager.java:2106),",
        "    at androidx.fragment.app.FragmentManager.execSingleAction(FragmentManager.java:1975),",
        "    at androidx.fragment.app.BackStackRecord.commitNowAllowingStateLoss(BackStackRecord.java:311),",
        "    at androidx.fragment.app.FragmentStatePagerAdapter.finishUpdate(FragmentStatePagerAdapter.java:275),",
        "    at androidx.viewpager.widget.ViewPager.populate(ViewPager.java:1272),",
        "    at androidx.viewpager.widget.ViewPager.populate(ViewPager.java:1120",
        "java.lang.NullPointerException: Attempt to invoke virtual method 'void android.widget.TextView.setText(java.lang.CharSequence)' on a null object reference",
        "    at com.example.myapplication.MainActivity.onCreate(MainActivity.java:25)",
        "    at android.app.Activity.performCreate(Activity.java:7994)",
        "    at android.app.Activity.performCreate(Activity.java:7978)",
        "    at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1309)",
        "    at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3428)",
        "    at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3594)",
        "    at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:85)",
        "    at android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:135)",
        "    at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:95)",
        "    at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2147)",
        "    at android.os.Handler.dispatchMessage(Handler.java:107)",
        "    at android.os.Looper.loop(Looper.java:237)",
        "    at android.app.ActivityThread.main(ActivityThread.java:7948)",
        "    at java.lang.reflect.Method.invoke(Native Method)",
        "    at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:493)",
        "    at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1075)",
    ]

    var stack = []
    for(let i=0; i<strings.length; i++){
        const str = strings[i];
        const prefix = str.substring(0,str.indexOf("(")+1);
        const suffix = str.substring(str.indexOf(")"));
        const value = str.substring(str.indexOf("(")+1,str.indexOf(")"));
        const num = parseInt(value.match(/\d+/),10);
        var color = "blue";
        
        if(num>1000){
            color = "stack-grey"
        }else{
            color="stack-blue"
        }

        stack[i] = {prefix, value, suffix,color};
    }


    var [stack, setStack] = useState(stack);
    const frame = useRef(null);


    const handleChange = () => {
        var newStack = []
        for(let i=0; i<stack.length; i++){
            var value;
            if(i==stack.length-1){
                value = stack[0]
            }else{
                value = stack[i+1]
            }
            newStack[i] = value;
        }
        stack = newStack
        setStack(stack)    
        setTimeout(() => requestAnimationFrame(handleChange), 100);
    }

    useEffect(() => {
        frame.current = requestAnimationFrame(handleChange);
        return () => cancelAnimationFrame(frame.current)
    }, []);


    return(
    
        <div className="stack-container">
            
           {stack.map((line,index) => (
               <div key={"stack-line"+index}>
                    <span className={"stack-span "}>{line.prefix}</span>
                    <span className={"stack-value "+line.color}>{line.value}</span>
                    <span className={"stack-span "}>{line.suffix}</span>
                </div>
                )
            )}

        </div>
    )
}