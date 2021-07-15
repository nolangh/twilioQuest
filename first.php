<?php
//ANCHOR this works
function isABotCheck($isABot = true)
{
    if ($isABot == true) {
        return true;
    }
    return false;
}
//ANCHOR this works
function passwordCheck($providedPassword, $actualPassword)
{
    if ($providedPassword != $actualPassword) {
        return false;
    }
    return true;
}
//ANCHOR this works
function securityAnswerCheck($providedAnswer, $actualAnswer)
{
    if ($providedAnswer == $actualAnswer) {
        return true;
    }
    return false;
}

function passwordTriesHitLimit($tries)
{
    $limit = 5;
    if ($tries > $limit || $tries <= 0) {
        return true;
    }
    return false;
}
