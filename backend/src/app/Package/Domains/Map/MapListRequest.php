<?php

namespace App\Package\Domains\Map;

final class MapListRequest
{
    private const PAGE_LIMIT = 20;
    public readonly int $page;
    public readonly int $limit;
    public readonly ?int $userId;

    public function __construct(int $page = null, int $limit = null, ?int $userId = null)
    {
        $this->page = $page ?? 1;
        $this->limit = $limit ?? self::PAGE_LIMIT;
        $this->userId = $userId ?? null;
    }
}
