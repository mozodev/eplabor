<?php

use Directus\Application\Application;
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;

return [
    '' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            
            $results = shell_exec('/vagrant/provision/git-sync.sh');
            return $response->withJson([
                $results
            ]);
        }
    ],
];
