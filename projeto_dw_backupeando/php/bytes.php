<?php
  function ps() {
    $result = shell_exec('echo status director |bconsole');
    $ps = ps_encode($result);
    
    header("Content-type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    echo json_encode($ps);
  }

  function ps_encode($result) {
    $processes = [];

    $regex = "/\s[0-9]\S[0-9]+\s.\s/";
    preg_match_all($regex, $result, $matches);

    foreach ($matches[0] as $index => $user) {
      $processes[] = [
        "bytes"    => $matches[0][$index],
      ];
    }

    return $processes;
  }

  ps();
?>
